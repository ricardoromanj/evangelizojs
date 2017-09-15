const request = require('request');
const cheerio = require('cheerio');
const _ = require('lodash');
const moment = require('moment');
const Promise = require('promise');

const TYPEOPTIONS = [
    'saint',
    'feast',
    'liturgic_t',
    'reading_lt',
    'reading_st',
    'reading',
    'all',
    'comment_t',
    'comment_a',
    'comment_s',
    'comment'
];

const LANGOPTIONS = [
    'AM',
    'AR',
    'DE',
    'FR',
    'GR',
    'IT',
    'MG',
    'NL',
    'PL',
    'PT',
    'SP',
    'ARM',
    'BYA',
    'MAA',
    'TRF',
    'TRA'
];

const CONTOPTIONS = [
    'FR',
    'SR',
    'PS',
    'GSP',
    'EP'
];

EvangelizoException = function(message) {
    this.message = message;
    this.name    = "EvangelizoException";
};

const HOST = 'feed.evangelizo.org';
const PATH = '/v2/reader.php';

var options = {
    host: 'feed.evangelizo.org',
    path: '/v2/reader.php?date=20170108&type=reading_lt&lang=SP&content=GSP'
};

createUrl = function(opts) {
    /*
     * Date is mandatory, so check if it is present
     */
    if (!opts.date)
    {
        throw new EvangelizoException("Date is necessary");
    }

    /*
     * Type is mandatory, so check if it is present
     */
    if (!opts.type)
    {
        throw new EvangelizoException("Type is necessary");
    }
    else
    {
        /*
         * If present, must be one of the allowed types
         */
        if (!_.includes(TYPEOPTIONS, opts.type))
        {
            throw new EvangelizoException("Type must be one of: " + _.toString(TYPEOPTIONS));
        }
    }

    /*
     * Lang is necessary, so check if it is present
     */
    if (!opts.lang)
    {
        throw new EvangelizoException("Lang is necessary");
    }
    else
    {
        /*
         * If present, must be one of allowed langs
         */
        if (!_.includes(LANGOPTIONS, opts.lang))
        {
            throw new EvangelizoException("Lang must be one of: " + _.toString(LANGOPTIONS));
        }
    }

    /*
     * Create url path
     */
    var path = PATH;

    /*
     * Format date and add to path
     */ 
    toFormattedDate = moment(opts.date, 'YYYYMMDD');

    formattedDate = toFormattedDate.format('YYYYMMDD');
    if (formattedDate === 'Invalid date') {
      throw new EvangelizoException("Invalid date: " + opts.date + ", formattedDate: " + formattedDate);
    }

    path += '?date=' + formattedDate;

    /*
     * Add type
     */
    path += '&type=' + opts.type;

    /*
     * Add lang
     */
    path += '&lang=' + opts.lang;

    /*
     * Check for content option and add
     */
    if (opts.content)
    {
        path += '&content=' + opts.content;
    }

    return path;
};

checkGetOpts = function(getOpts) {
    if (typeof getOpts === 'undefined')
    {
        getOpts = {
            date: new Date(),
            lang: 'AM'
        };
    }
    else
    {
        if (typeof getOpts.date === 'undefined') { getOpts.date = new Date(); }
        if (typeof getOpts.lang === 'undefined') { getOpts.lang = 'AM'; }
    }
    return getOpts;
};

makeRequest = function(getOpts) {
    var rejectNow = false;
    var rejectMsg = '';

    try {
        let reqUrl = createUrl(getOpts);

        var reqOpts = {
            method: 'GET',
            uri: 'http://' + HOST + reqUrl,
            gzip: true
        };

    } catch(e) {
        rejectNow = true;
        rejectMsg = 'Error creating URL: ' + e.message;
    }


    return new Promise(function(resolve, reject) {

        if (rejectNow) {
            reject(rejectMsg);
        }
        else
        {
            request(reqOpts, function(err, res, body) {
                if (res.statusCode !== 200) {
                  reject(err);
                }
                else {
                  var str = '';
                  str = _.split(body, '<br /><br />', 1)[0];
                  $ = cheerio.load(str, { normalizeWhitespace: true });
                  str = $.text();
                  // Check for date further then 30 days
                  if (/Must be less than 30 days from today/.test(str)) {
                    reject("Date is too far away");
                  }
                  resolve(str);
                }
            });
        }

    });
};

exports.getSaint = function(saintOptions) {
    saintOptions = checkGetOpts(saintOptions);

    saintOptions.type = 'saint';

    return makeRequest(saintOptions);
};

exports.getFeast = function(feastOptions) {
    feastOptions = checkGetOpts(feastOptions);

    feastOptions.type = 'feast';

    return makeRequest(feastOptions);
};

exports.getLiturgicTitle = function(ltOptions) {
    ltOptions = checkGetOpts(ltOptions);

    ltOptions.type = 'liturgic_t';

    return makeRequest(ltOptions);
};

exports.getReading = function(content, readingOptions) {
    if (typeof content === 'undefined' || !_.includes(CONTOPTIONS,content))
    {
        throw new EvangelizoException("Parameter content should be one of: " + _.toString(CONTOPTIONS));
    }

    readingOptions = checkGetOpts(readingOptions);

    readingOptions.type = 'reading';
    readingOptions.content = content;

    return makeRequest(readingOptions);
};

exports.getReadingLt = function(content, readingOptions) {
    if (typeof content === 'undefined' || !_.includes(CONTOPTIONS,content))
    {
        throw new EvangelizoException("Parameter content should be one of: " + _.toString(CONTOPTIONS));
    }

    readingOptions = checkGetOpts(readingOptions);

    readingOptions.type = 'reading_lt';
    readingOptions.content = content;

    return makeRequest(readingOptions);
};

exports.getReadingSt = function(content, readingOptions) {
    if (typeof content === 'undefined' || !_.includes(CONTOPTIONS,content))
    {
        throw new EvangelizoException("Parameter content should be one of: " + _.toString(CONTOPTIONS));
    }

    readingOptions = checkGetOpts(readingOptions);

    readingOptions.type = 'reading_st';
    readingOptions.content = content;

    return makeRequest(readingOptions);
};
