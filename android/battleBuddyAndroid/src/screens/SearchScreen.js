import React from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity} from 'react-native';
import {theme} from '../components/Theme';
import ScrollableContainer from '../components/common/ScrollableContainer';
import LoadingIndicator from '../components/common/LoadingIndicator';
import Search from '../components/common/Search';
import {useSearch} from '../context/SearchProvider';
import ItemCard from '../components/common/ItemCard';
import {useNavigation} from 'react-navigation-hooks';

const SearchScreen = () => {
  const {navigate} = useNavigation();
  const {loading, data} = useSearch();

  if (loading) return <LoadingIndicator />;

  const handlePress = (item) => {
    navigate('Detail', {item, type: item._kind});
  };

  return (
    <ScrollableContainer>
      <Search />
      {data &&
        data.map((x) => {
          return (
            <TouchableOpacity key={x._id} onPress={() => handlePress(x)}>
              <ItemCard text={x.shortName} {...x} />
            </TouchableOpacity>
          );
        })}
    </ScrollableContainer>
  );
};

SearchScreen.navigationOptions = {
  title: 'Items',
  headerStyle: {
    backgroundColor: theme.colors.almostBlack
  },
  headerTintColor: theme.colors.orange,
  headerTitleStyle: {
    fontSize: 28
  }
};

SearchScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  }).isRequired
};

export default SearchScreen;