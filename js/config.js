'use strict';

let CONFIG = {};

// TODO: UPDATE copy below
// TODO: UPDATE title tags in ALL PAGES

// Artist id:
CONFIG.uid = 'o9CeUAqrd2c68PFlqbXFEkrnCij2';
CONFIG.baseUrl = 'https://us-central1-art-auction-2ef27.cloudfunctions.net';
CONFIG.subdomain = ''; // '/github_username'

CONFIG.copy = {
    artistName: 'CosmicTreasures',
    artistFname: 'Emily',
    artistCategories: 'PsychedelicArt | Abstract | Illustration',
    artistHeadline: 'Toronto based visual artist',
    artistAboutBlurb: `Emily is a self taught artist born and raised in Toronto. Her work ranges from abstract, to photo-realistic, to the psychedelic and sometimes macabre. Detail oriented, she strives to view things from new perspectives - both figuratively and literally. Emily is currently accepting commissions for custom artwork.<br><br><i>"I am fascinated by the mysteries of nature and the cosmos. Through art, I explore my relationship to the universe as a human being."</i>`,
}
CONFIG.socialMedia = {
    ig: 'http://instagram.com/cosmic_treasures',
    // fb: 'http://facebook.com/Josh',
    // twitter: 'http://twitter.com/Josh',
}






// FUNCITONS
CONFIG.copy._updateHomepageCopy = function() {
    CONFIG.copy.artistFname ? 
        $('.j_fname').text('About ' + CONFIG.copy.artistFname): null;
    CONFIG.copy.artistCategories ? 
        $('.j_artistCategories').text(CONFIG.copy.artistCategories): null;
    CONFIG.copy.artistHeadline ? 
        $('.j_artistHeadline').text(CONFIG.copy.artistHeadline): null;
    CONFIG.copy.artistAboutBlurb ? 
        $('.j_artistAboutBlurb').html(CONFIG.copy.artistAboutBlurb): null;
}



CONFIG.copy._headerFooterComponents = function() {
    CONFIG.copy.artistName ? 
        updateTitleTag() : null;
    CONFIG.copy.artistName ? 
        $('.j_artistName').text(CONFIG.copy.artistName): null;
    CONFIG.copy.artistName ? 
        $('.j_footerCopyright').text(CONFIG.copy.artistName + ' | Copyright 2018.'): null;
    CONFIG.socialMedia.ig ?
        $('.j_igUrl').attr('href', CONFIG.socialMedia.ig) : $('.j_igUrl').hide();   
    CONFIG.socialMedia.fb ?
        $('.j_fbUrl').attr('href', CONFIG.socialMedia.fb) : $('.j_fbUrl').hide();   
    CONFIG.socialMedia.twitter ?
        $('.j_twitterUrl').attr('href', CONFIG.socialMedia.twitter) : $('.j_twitterUrl').hide();   
}

var updateTitleTag = function() {
    console.log('title')
    document.title = CONFIG.copy.artistName + " | Toronto Based Artist";
}
