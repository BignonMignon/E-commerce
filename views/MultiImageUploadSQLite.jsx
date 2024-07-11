import React, { Component } from 'react';
import { View, Text, Button, Image, FlatList } from 'react-native';
import SQLite from 'react-native-sqlite-storage';
import ImagePicker from 'react-native-image-crop-picker';

class MultiImageUploadSQLite extends Component {
  constructor() {
    super();
    this.state = {
      imagePaths: [],
      images: [],
    };
  }

  componentDidMount() {
    const db = SQLite.openDatabase({ name: 'mydb.db', location: 'default' });

    db.transaction((tx) => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS images (id INTEGER PRIMARY KEY AUTOINCREMENT, path TEXT)',
        [],
        () => console.log('Table created successfully'),
        (error) => console.error('Error creating table', error)
      );
    });

    db.transaction((tx) => {
      tx.executeSql('SELECT * FROM images', [], (tx, results) => {
        const rows = results.rows;
        const imagePaths = [];
        for (let i = 0; i < rows.length; i++) {
          imagePaths.push(rows.item(i).path);
        }
        this.setState({ images: imagePaths });
      });
    });
  }

  openImagePicker = () => {
    ImagePicker.openPicker({
      multiple: true,
    })
      .then((images) => {
        const db = SQLite.openDatabase({ name: 'mydb.db', location: 'default' });

        db.transaction((tx) => {
          images.forEach((image) => {
            tx.executeSql(
              'INSERT INTO images (path) VALUES (?)',
              [image.path],
              () => console.log('Image path added to the database.'),
              (error) => console.error('Error adding image path to the database', error)
            );
          });
          this.componentDidMount(); // Refresh the image list
        });
      })
      .catch((error) => {
        console.error('Image picker error: ', error);
      });
  };

  render() {
    const { images } = this.state;
    return (
      <View>
        <Button title="Upload Images" onPress={this.openImagePicker} />
        <FlatList
          data={images}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <Image source={{ uri: item }} style={{ width: 100, height: 100 }} />}
        />
      </View>
    );
  }
}

export default MultiImageUploadSQLite;
