import { put as dispatch, takeLatest, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
// import {call} from 'redux-saga/effects';

function* getHero(action) {
    try {
        const response = yield axios.get(`https://overwatch-api.net/api/v1/hero/${action.payload}`);  // get sheet music
        console.log(`get hero`, response.data);
        yield dispatch({ type: 'SET_HERO', payload: response.data });
    } catch (error) {
        console.log('error in get hero:', error);
    }
};
function* getHeros() {
    try {
        const response = yield axios.get(`https://overwatch-api.net/api/v1/hero`);  // get sheet music
        console.log(`get heros`, response.data);
        yield dispatch({ type: 'SET_HERO', payload: response.data });
    } catch (error) {
        console.log('error in get heros:', error);
    }
};


// function* searchMusic(action) {
//     try {
//         console.log(`our action going to our saga`, action.payload);
//         let instrument = action.payload.instrument || '*';
//         let difficulty = action.payload.difficulty || '*';
//         let name = action.payload.name || '*';
//         console.log('checking to see if null', instrument, difficulty, name);

//         const setMusic = yield axios.get(`/api/music/search/${instrument}/${difficulty}/${name}`);  // get searched sheet music
//         console.log(`get search music`, setMusic.data);

//         yield dispatch({ type: 'SET_SHEET_MUSIC', payload: setMusic.data });
//     } catch (error) {
//         console.log('error in get sheet music:', error);
//     }
// };

// function* deleteMusic(action){
//     try{
//         yield axios.delete(`/api/music/${action.payload}`);
//         yield dispatch({ type: 'DELETE_MUSIC_SNACK' });
//         yield dispatch({ type: 'GET_SHEET_MUSIC'});
//     } catch(error) {
//         console.log('error deleting music', error);
//     }
// };

// function* editMusic(action) {
//   try {
//     yield axios.put('/api/music', action.payload);
//     yield dispatch({ type: 'EDIT_MUSIC_SNACK' });
//     yield dispatch({ type: 'GET_SHEET_MUSIC' });
//   } catch (error) {
//     console.log('error editing music', error);
//   }
// };

function* heroWatcher() {
    yield takeLatest('GET_HERO', getHero);
    yield takeLatest('GET_HEROS', getHeros);

    // yield takeLatest('DELETE_SHEET_MUSIC', deleteMusic);
    // yield takeLatest('SEARCH_SHEET_MUSIC', searchMusic)
    // yield takeEvery('EDIT_SHEET_MUSIC', editMusic)
}
export default heroWatcher;
