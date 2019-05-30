import React from 'react';
import { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

import PropTypes from 'prop-types'; 

export interface IRepo {
  id: number;
  name: string;
  description: string;
  stargazers_count: number;
}

export interface IRepoItemProps {
  isSelected: boolean;
  repo: IRepo;
  selectRepo:(id:number) => {};
}

const RepoItem = (props: IRepoItemProps) => {
  const { description, id, name, stargazers_count } = props.repo;
  const itemStyle = props.isSelected && [styles.item, styles.selected] || styles.item;
  return (
    <TouchableHighlight
      onPress={() => {props.selectRepo ? props.selectRepo(id) : {}}}
      underlayColor='#E0F2F1'
    >
      <View style={itemStyle}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.stars}>{`${stargazers_count} stars`}</Text>
        { props.isSelected ? <Text>{description}</Text> : null }
      </View>
    </TouchableHighlight>
  );
};

RepoItem.propTypes = {
  isSelected: PropTypes.bool,
  repo: PropTypes.object.isRequired,
  selectRepo: PropTypes.func,
};

RepoItem.defaultProps = {
  isSelected: false,
};

const styles = StyleSheet.create({
  item: {
    paddingVertical: 8,
    paddingHorizontal: 24,
  },
  selected: {
    backgroundColor: '#B2DFDB',
  },
  stars: {
    paddingBottom: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingBottom: 4,
  },
});

export default RepoItem;
