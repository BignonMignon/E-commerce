import React, { Component } from 'react';
import { View, Text, Button, Image, TextInput, FlatList } from 'react-native';
import SQLite from 'react-native-sqlite-storage';
// import ImagePicker from 'react-native-image-picker';
import ImagePicker from 'react-native-image-crop-picker';

class ImageUploadSQLite extends Component {
  constructor() {
    super();
    this.state = {
      imagePath: '',
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
    const options = {
      title: 'Select Image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log('Image picker was canceled.');
      } else if (response.error) {
        console.error('Image picker error: ', response.error);
      } else {
        // Upload the selected image and store its path in the database
        const imagePath = response.uri;

        const db = SQLite.openDatabase({ name: 'mydb.db', location: 'default' });

        db.transaction((tx) => {
          tx.executeSql(
            'INSERT INTO images (path) VALUES (?)',
            [imagePath],
            () => {
              console.log('Image path added to the database.');
              this.componentDidMount(); // Refresh the image list
            },
            (error) => console.error('Error adding image path to the database', error)
          );
        });
      }
    });
  };

  render() {
    const { imagePath, images } = this.state;
    return (
      <View>
        <Button title="Upload Image" onPress={this.openImagePicker} />
        <TextInput
          placeholder="Image Path"
          value={imagePath}
          onChangeText={(text) => this.setState({ imagePath: text })}
        />
        <FlatList
          data={images}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <Image source={{ uri: item }} style={{ width: 100, height: 100 }} />}
        />
      </View>
    );
  }
}

export default ImageUploadSQLite;
