import React, { Component } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import SQLite from 'react-native-sqlite-storage';

class SQLiteExample extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
    };
  }

  componentDidMount() {
    // Ouvrir ou créer la base de données
    const db = SQLite.openDatabase({ name: 'test', location: 'default' });

    // Créer une table s'il n'existe pas
    db.transaction((tx) => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS items (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT)',
        [],
        () => console.log('Table créée avec succès'),
        (error) => console.error('Erreur lors de la création de la table', error)
      );
    });

    // Récupérer les données de la table
    // db.transaction((tx) => {
    //   tx.executeSql('SELECT * FROM items', [], (tx, results) => {
    //     const rows = results.rows;
    //     const data = [];
    //     for (let i = 0; i < rows.length; i++) {
    //       data.push(rows.item(i));
    //     }
    //     this.setState({ items: data });
    //   });
    // });
  }

  // Fonction pour ajouter un élément à la base de données
  addItem = () => {
    const db = SQLite.openDatabase({ name: 'test.db', location: 'default' });
    db.transaction((tx) => {
      tx.executeSql(
        'INSERT INTO items (name) VALUES (?)',
        ['Nouvel élément'],
        () => {
          console.log('Élément ajouté avec succès');
          this.componentDidMount(); // Rafraîchir la liste
        },
        (error) => console.error('Erreur lors de l\'ajout de l\'élément', error)
      );
    });
  };

  render() {
    const { items } = this.state;
    return (
      <View>
        <Button title="Ajouter un élément" onPress={this.addItem} />
        <FlatList
          data={items}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <Text>{item.name}</Text>}
        />
      </View>
    );
  }
}

export default SQLiteExample;
