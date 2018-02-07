'use strict';

let CONFIG = {};

// TODO: UPDATE copy below
// TODO: UPDATE title tags in ALL PAGES

// Artist id:
CONFIG.uid = 'o9CeUAqrd2c68PFlqbXFEkrnCij2';
CONFIG.baseUrl = 'https://us-central1-art-auction-2ef27.cloudfunctions.net';

CONFIG.copy = {
    artistName: 'CosmicTreasures',
    artistFname: 'Emily',
    artistCategories: 'PsychedelicArt | Abstract | Illustration',
    artistHeadline: 'Toronto based visual artist',
    // artistAboutBlurb: `This is the artist's description, about their life and work. Maybe how they got into it, and why they do it. Or what's some of their most notable/exciting work.<br><br><i>"Maybe even an annecdote."</i>`,
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