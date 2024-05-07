import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 20,
  },
  buttonText: {
    color: '#333',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#d1d1d1',
    margin: 10,
  },
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
},
  buttonLabel: {
    color: '#fff',
    fontSize: 16,
},
  buttonIcon: {
    paddingRight: 8,
},
  imageContainer: {
    flex: 1,
    marginBottom: 30,
    alignItems: 'center', 
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
},
  image: {
    width: 300, 
    height: 300, 
    borderRadius: 18
  }
});

