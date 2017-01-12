var assert = require('assert');
var evangelizo = require('../lib/evangelizo.js');

var testDate = new Date(new Date().getFullYear(), new Date().getMonth(), 1);

describe('Evangelizo', function() {
        describe('#getSaint() without parameters', function() {
                it('should return a valid string', function(done) {

                        evangelizo.getSaint().then((str) => {
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
                    if (typeof str === 'string') done();
                    else done(err);
                }, (err) => {
                    done(err);
                });

            });
        });

        describe('#getfeast() without parameters', function() {
            it('should return a valid string', function(done) {

                evangelizo.getFeast().then((str) => {
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
                    if (typeof str === 'string') done();
                    else done(err);
                }, (err) => {
                    done(err);
                });

            });
        });
});
