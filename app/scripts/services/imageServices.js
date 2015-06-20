/**
 * Created by zarya on 6/19/15.
 */

'use strict';

var app = angular.module('jafarApp.services');

app.service( 'ImageServices', [function() {

  this.topicImages = {
      design: [
        'http://www.vandelaydesign.com/wp-content/uploads/01-website-flat-design-examples.jpg',
        'http://media.peugeot.com/images/backgrounds/design/concept-peugeot-design-lab.jpg',
        'http://gdj.gdj.netdna-cdn.com/wp-content/uploads/2013/12/flat-website-design-3.jpg',
        'http://hicomm.bg/web/files/richeditor/articles/images/analysis/material_design/1.jpg',
        'https://s-media-cache-ak0.pinimg.com/736x/2a/4c/4b/2a4c4b85a760a54dbd68f253199cbbe4.jpg'
      ],
    gaming: [
      'http://coreofthepixel.com/wp-content/uploads/2012/04/donkeykongmario.jpg',
      'http://blog.fidmdigitalarts.com/wp-content/uploads/2013/06/broken-age-video-game-art-2013.jpg',
      'http://idrawgirls.com/tutorials/wp-content/uploads/2011/11/art-job-in-video-game.jpg',
      'http://www.dailyartfixx.com/wp-content/uploads/2009/08/the-exchange-briandespain.jpg',
      'http://www.bloodyloud.com/wp-content/gallery/brian-despain/brian-despain02.jpg'
    ],
    cars: [
      'http://images4.alphacoders.com/267/267044.jpg',
      'http://www.theholykale.com/wp-content/uploads/2012/05/Austin-Car-Art-by-Visualist-Images.jpg',
      'http://computerwallpapers.org/wp-content/uploads/2014/05/wpid-Car-Art-Wallpaper-3.jpg',
      'http://www.ssrfanatic.com/forum/attachments/f4/97199-look-aqua-blur-muscle-car-art-aqua-blur-car-art-.jpg',
      'https://inspiredpixel.files.wordpress.com/2013/05/art-vanquish-main.jpg'
    ],
    finance: [
      'http://cbsnews1.cbsistatic.com/hub/i/2014/03/22/76c1b9ea-b2b6-48b4-9935-aaf22ceb94cc/money-art-money-lisa-detail.jpg',
      'http://pooboy.com/wp-content/uploads/2013/09/money-art-4.jpg',
      'http://assets.inhabitat.com/wp-content/blogs.dir/1/files/2011/12/Mark-Wagner1.jpg',
      'http://i.telegraph.co.uk/multimedia/archive/01633/dollar-face-2_1633160i.jpg',
      'http://i.telegraph.co.uk/multimedia/archive/01633/dollar-liberty_1633152i.jpg'
    ],
    sports: [
      'http://www.albwall.com/wp-content/uploads/2015/04/athlete-of-the-future.jpg',
      'http://www.nebulabot.com/images/future-jetski.jpg',
      'http://files2.coloribus.com/files/adsarchive/part_864/8645605/file/student-athlete-recruiting-portal-high-jump-small-60196.jpg',
      'https://omnireboot.com/wp-content/uploads/2014/09/FutureSports400-300.jpg',
      'http://assets-s3.mensjournal.com/img/article/building-the-new-super-athlete/298_298_building-the-new-super-athlete.jpg'
    ],
    travel: [
     'https://img0.etsystatic.com/045/0/5859333/il_fullxfull.693711776_d3jr.jpg',
     'http://a1.s6img.com/cdn/0015/p/5171018_11844447_pm.jpg',
     'http://www.travel-studies.com/sites/default/files/images/Art%20of%20Travel%20balloon.jpg',
     'http://blog.ihacares.com/wp-content/uploads/2014/07/travel.jpg',
     'http://www.wanderarti.com/wp-content/uploads/2014/04/London.png'
    ],
    science: [
      'https://40.media.tumblr.com/0c3e21d2bb88c7949845bb64b0b6ad61/tumblr_npnrf7FdM41qb7vqto1_500.jpg',
      'http://media.tumblr.com/511adff8d0c676d9350f3c72b0e99fc0/tumblr_inline_mheccv1F2j1qz4rgp.jpg',
      'http://blog.diversitynursing.com/Portals/100318/images/Art%20or%20Science%2002.jpg.jpg',
      'http://www.nanowerk.com/news/id23249_1.jpg',
      'https://s-media-cache-ak0.pinimg.com/236x/60/19/f9/6019f927642c42df597374a98485a53c.jpg'


    ],
    news: [
      'http://progressivepulse.com/wp-content/uploads/2012/11/The-Assassination-of-Osama-bin-Laden-2011-by-Catherine-Tafur_oil-on-canvas_57inx-72in.jpg',
      'http://www.noupe.com/wp-content/uploads/2010/01/130.jpg',
      'http://jeremyrussellart.com/wp-content/gallery/politics/jeremy-russell-fine-art-politics-series-2.jpg',
      'http://www.cmu.edu/news/image-archive/Slavick_art_news2.jpg',
      'http://futuristicnews.com/wp-content/uploads/2012/05/Plastic-Fish-Tower-futuristic-Skyscraper-01.jpg',
    ],
    cinema: [
      'http://theravemag.com/wp-content/uploads/2014/05/131120-wes-anderson-black-francis.jpg',
      'http://m1.paperblog.com/i/97/979586/beery-method-movies-fan-art-L-WF_qLm.jpeg',
      'http://www.worldart.com.au/images/cult-movie-art.JPG',
      'http://www.artsmeridiem.com/USERIMAGES/Film%20Art%20Take%204(1).jpg',
      'https://amygalea.files.wordpress.com/2014/10/cinema-tickets-for-two.jpg'
    ],
    tech: [
      'http://orig10.deviantart.net/0a47/f/2008/351/3/4/machine_art___by_steja007.jpg',
      'http://img.scoop.it/Bj53pblorLl77jnvx-8ZhDl72eJkfbmt4t8yenImKBVvK0kTmF0xjctABnaLJIm9',
      'http://www.appliancesonlineblog.com.au/wp-content/uploads/2012/10/bauknecht-washing-machine.jpg',
      'http://www.iainclaridge.co.uk/blog/wp-content/uploads/2011/11/tin_robot.jpg',
      'http://www.tuvie.com/wp-content/uploads/horological-machine-no-3-futuristic-watch1.jpg'
    ],
    business: [
      'http://1940s.org/vault/2011/01/break1.jpg',
      'https://s-media-cache-ak0.pinimg.com/736x/79/2b/70/792b702b40982ded0d6921ce41a91090.jpg',
      'https://ephemeralnewyork.files.wordpress.com/2014/08/raphaelsoyeremploymentagency.jpg',
      'http://cdn.londonandpartners.com/asset/fashion-on-the-ration-1940s-street-style-at-imperial-war-museum_fashion-on-the-ration-1940s-street-style-at-imperial-war-museum-iwm-art_e420fe77d7949a6610f0cc177048c85a.jpg',
      'https://ephemeralnewyork.files.wordpress.com/2014/06/beladetirefortbleeckerst.png'
    ]
  };
}]);