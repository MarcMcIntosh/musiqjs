var _ = require('lodash'),
    defs = require('./defs'),
    validators = require('./validators'),
    Note = require('./note'),
    Chord = require('./chord'),
    Chords = require('./chords');

/**
 * MUSIQ: a javascript library for note and chord analysis
 * 
 */
var musiq = {};

// MUSIQ utility functions
var utils = {
    /**
     * the very powerful match() function takes a string
     * and tries to find all the matches, be it notes, chords
     * or scales.
     *
     * @param {string} name - a name of a note, chord or scale
     *
     * @returns {array} - an array of match objects (Note/Scale/Chord)
     */
    match: function( name ){

        var ret = [];

        if( validators.isValidNote( name )){
            console.log("Match single note");
            ret.push( Note.fromNotation(name) );
        }

        if( validators.isValidNoteList( name ) ){
            console.log("Match multiple notes");
            ret.concat( Note.fromNotation(name));
        }

        if( validators.isValidChord( name )){
            console.log("Match single chord");
            ret.push( Chords.fromNotation( name ));
        }
        if( validators.isValidScale( name )){
            console.log("Match single scale");
            ret.push( Chords.fromNotation( name, 'scale' ) );
        }

        return ret;
    }
};

// extend MUSIQ object with utility functions
musiq = _.extend(musiq, utils);
// extend MUSIQ object with defaults
musiq = _.extend(musiq, defs);
// extend MUSIQ object with validators
musiq = _.extend(musiq, validators);

module.exports = musiq;
