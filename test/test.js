var assert = require('assert');
var evangelizo = require('../lib/evangelizo.js');

var testDate = new Date(new Date().getFullYear(), new Date().getMonth(), 1);

describe('Evangelizo', function() {
    describe('#getSaint() without parameters', function() {
        it('should return a valid string', function(done) {

            evangelizo.getSaint().then((str) => {
                console.log(str);
                if (typeof str === 'string') { done(); }
                else done(err);
            }, (err) => {
                done(err);
            });

        });
    });

    describe('#getSaint() with date and lang parameters', function() {
        it('should return a valid string', function(done) {

            evangelizo.getSaint({ lang: 'SP', date: testDate }).then((str) => {
                console.log(str);
                if (typeof str === 'string') done();
                else done(err);
            }, (err) => {
                done(err);
            });

        });
    });

    describe('#getFeast() without parameters', function() {
        it('should return a valid string', function(done) {

            evangelizo.getFeast().then((str) => {
                console.log(str);
                if (typeof str === 'string') done();
                else done(err);
            }, (err) => {
                done(err);
            });

        });
    });

    describe('#getFeast() with date and lang parameters', function() {
        it('should return a valid string', function(done) {

            evangelizo.getFeast({ lang: 'SP', date: testDate }).then((str) => {
                console.log(str);
                if (typeof str === 'string') done();
                else done(err);
            }, (err) => {
                done(err);
            });

        });
    });

    describe('#getLiturgicTitle() without parameters', function() {
        it('should return a valid string', function(done) {

            evangelizo.getLiturgicTitle().then((str) => {
                console.log(str);
                if (typeof str === 'string') done();
                else done(err);
            }, (err) => {
                done(err);
            });

        });
    });

    describe('#getLiturgicTitle() with date and lang parameters', function() {
        it('should return a valid string', function(done) {

            evangelizo.getLiturgicTitle({ lang: 'SP', date: testDate }).then((str) => {
                console.log(str);
                if (typeof str === 'string') done();
                else done(err);
            }, (err) => {
                done(err);
            });

        });
    });
    describe('#getReading() only with content parameter', function() {
        it('should return a valid string', function(done) {

            evangelizo.getReading('FR').then((str) => {
                console.log(str);
                if (typeof str === 'string') done();
                else done(err);
            }, (err) => {
                done(err);
            });

        });
    });

    describe('#getReading() with content, date and lang parameters', function() {
        it('should return a valid string', function(done) {

            evangelizo.getReading('FR', { date: testDate, lang: 'SP' }).then((str) => {
                console.log(str);
                if (typeof str === 'string') done();
                else done(err);
            }, (err) => {
                done(err);
            });

        });
    });

    describe('#getReadingLt() only with content parameter', function() {
        it('should return a valid string', function(done) {

            evangelizo.getReadingLt('FR').then((str) => {
                console.log(str);
                if (typeof str === 'string') done();
                else done(err);
            }, (err) => {
                done(err);
            });

        });
    });

    describe('#getReadingLt() with content, date and lang parameters', function() {
        it('should return a valid string', function(done) {

            evangelizo.getReadingLt('FR', { date: testDate, lang: 'SP' }).then((str) => {
                console.log(str);
                if (typeof str === 'string') done();
                else done(err);
            }, (err) => {
                done(err);
            });

        });
    });

    describe('#getReadingSt() only with content parameter', function() {
        it('should return a valid string', function(done) {

            evangelizo.getReadingSt('FR').then((str) => {
                console.log(str);
                if (typeof str === 'string') done();
                else done(err);
            }, (err) => {
                done(err);
            });

        });
    });

    describe('#getReadingSt() with content, date and lang parameters', function() {
        it('should return a valid string', function(done) {

            evangelizo.getReadingSt('FR', { date: testDate, lang: 'SP' }).then((str) => {
                console.log(str);
                if (typeof str === 'string') done();
                else done(err);
            }, (err) => {
                done(err);
            });

        });
    });

    describe('Check date validation', function() {
        it('should return err upon entering \'20160113\' as date', function(done) {

            evangelizo.getSaint({ date: '20160113' }).then((str) => {
                console.log(str);
                done(str);
            }, (err) => {
                if (typeof err === 'string') { console.log(err); done(); }
            });

        });
    });

    describe('#getReadingSt() with content, NUMBER date and lang parameters', function() {
        it('should return a valid string', function(done) {

            evangelizo.getReadingSt('FR', { date: 20170924, lang: 'SP' }).then((str) => {
                console.log(str);
                if (typeof str === 'string') done();
                else done(err);
            }, (err) => {
                done(err);
            });

        });
    });

    describe('Check NUMBER date validation', function() {
        it('should return err upon entering \'20170244\' as date', function(done) {

            evangelizo.getSaint({ date: '20170244' }).then((str) => {
                console.log(str);
                done(str);
            }, (err) => {
                if (typeof err === 'string') { console.log(err); done(); }
            });

        });
    });

});
