/**
 * Created by zarya on 6/19/15.
 */

'use strict';

var app = angular.module('jafarApp.services');

app.service( 'ImageServices', [function() {

  this.topicImages = {
      design: [
        'http://www.bloomberg.com/ss/06/03/monash/image/slide_1.jpg',
        'http://www.ip-watch.org/weblog/wp-content/uploads/2015/03/design-image.jpg',
        'http://media.peugeot.com/images/backgrounds/design/concept-peugeot-design-lab.jpg',
        'http://hicomm.bg/web/files/richeditor/articles/images/analysis/material_design/1.jpg',
        'https://s-media-cache-ak0.pinimg.com/736x/2a/4c/4b/2a4c4b85a760a54dbd68f253199cbbe4.jpg'
      ],
    gaming: [
      'https://s3.amazonaws.com/ksr/projects/492503/photo-main.jpg?1363484185',
      'http://orig00.deviantart.net/2b98/f/2012/183/7/5/75e9043f59630bfcf85629f082037db1-d55nc29.jpg',
      'https://d13yacurqjgara.cloudfront.net/users/230541/screenshots/1046191/hardcore_gamer_logo.jpg',
      'http://www.nowgamer.com/wp-content/uploads/2012/02/317770.jpg',
      'https://xtremegoofkingdom.files.wordpress.com/2013/03/kirby.png'
    ],
    cars: [
      'http://thewowstyle.com/wp-content/uploads/2015/04/car2.jpg',
      'https://blog-blogmediainc.netdna-ssl.com/SportsBlogcom/filewarehouse/37676/aa01e12761dda98a4a4eb8734a288ce0.jpg',
      'https://blog-blogmediainc.netdna-ssl.com/SportsBlogcom/filewarehouse/37676/8df5325eaa7b93356479f6dbb7b003e6.jpg',
      'http://images1.ecarlist.com/sites/cats_exotic/images/v2/car.png',
      'http://www.sixt.com/uploads/pics/bmw_5_sixt-car_rental-B.png'
    ],
    Finance: [
      'http://resources2.news.com.au/images/2014/02/06/1226819/196874-fd31f1e4-8ea4-11e3-bde5-79e0b0a6dde3.jpg',
      'http://i.telegraph.co.uk/multimedia/archive/02652/Lagarde_2652320d.jpg',
      'http://www.myspacetopsites.com/wp-content/uploads/2015/02/Financial-markets_body.jpg',
      'https://farm2.staticflickr.com/1126/1447552288_e63b2b3d90_n.jpg',
      'http://gdb.voanews.com/E23DD87E-BA31-4C55-AC34-E3EC9C6311D2_cx0_cy2_cw0_mw1024_s_n_r1.jpg'
    ],
    Sports: [
      'http://www.sportcourtmi.com/img/multi-sport_1.jpg',
      'http://sportlived.co.uk/images/made/_images/blog/SA_rugby_snap_1_1024_768_70.jpg',
      'http://images2.aystatic.com/places/313640/179171_home_hero.jpg?1418971946',
      'http://franceinlondon.com/images/editor/articles/4d6b959a9ea6d/Sorry%20good%20game.jpg',
      'http://www.youthsporttrust.org/media/ImageCache/dc8e6fa8ad94dcf289001ee7d5b4e962.660x5555.normal.80.False.jpg'
    ],
    Travel: [
     'http://techdrive.co/wp-content/uploads/2014/11/http-www.bhutantravelshop.com-wp-content-uploads-2014-07-lt.jpg',
     'http://actualizingself.com/wp-content/uploads/2014/02/Travel-Hacking-221.jpg',
     'http://www.travelcorporationasia.com/wp-content/uploads/2014/08/Indipendant-Travel1-2000x1250.jpg',
     'http://blog.ihacares.com/wp-content/uploads/2014/07/travel.jpg',
     'http://www.bbb.org/blog/wp-content/uploads/2011/09/plane_travel_large.jpg'
    ],
    Science: [
      'http://static.guim.co.uk/sys-images/Guardian/Science/pix/2013/1/8/1357666826925/cernmug.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/e/e4/HCAL_Prepared_for_insertion.jpg,' +
      'http://jpi-urbaneurope.eu/wp-content/uploads/2014/11/complex-network.jpg',
      'http://www.sciguru.org/sites/default/files/imagesb/epilepsy-migraine-physics.jpg',
      'http://prouduniqueswan.blog.com/wp-content/blogs.dir/00/08/76/13/8761390/files/pix/aquarius-wallpaper-1366x768-9.jpg'
    ],
    News: [
      'https://upload.wikimedia.org/wikipedia/commons/8/80/Singapore_Strait_Passing_warship.jpg',
      'http://www.kcet.org/about/pressroom/assets/images/mike%20embley_Courtesy_of_BBC_World_News.jpg',
      'http://a.abcnews.com/images/WNT/abc_conversation_101119_ms.jpg',
      'http://www.un.org/News/dh/photos/large/2012/March/03-29-2012bangladesh.jpg',
      'http://www.bu.edu/today/files/2013/09/t_10-2909-FORENSICS-009.jpg'
    ],
    Cinema: [
      'http://7-themes.com/data_images/out/53/6952793-minions-in-cinema.jpg',
      'http://tong.visitkorea.or.kr/cms/resource/87/1735587_image2_1.JPG',
      'http://www.lgblog.co.uk/wp-content/uploads/2011/05/3d-cinema-world-record.jpg',
      'http://i.ytimg.com/vi/IIqhxib1CLs/maxresdefault.jpg',
      'https://amygalea.files.wordpress.com/2014/10/cinema-tickets-for-two.jpg'
    ],
    Tech: [
      'http://www.itcareerfinder.com/images/easyblog_images/37/tech-startup-training.jpg',
      'http://www.brianmoran.com/wp-content/uploads/2013/04/startup-marketing.jpg',
      'https://assets.entrepreneur.com/content/16x9/822/1405367644-tech-startup-wants-revolutionize-your-home-vivint.jpg',
      'http://technical.ly/philly/wp-content/uploads/sites/2/2013/01/Scrum.jpg',
      'http://media5.cdn.builtinaustin.com/sites/www.builtinaustin.com/files/imagecache/Original/images/bib-if.jpg'
    ],
    Business: [
      'http://www.findaregister.com/wp-content/uploads/2015/03/Fotolia_57325018_Subscription_Monthly_XL.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/e/e1/Wallstreet_-_A_New_Era.jpg',
      'http://reading-place.com/wp-content/uploads/2015/03/Business_plans_strategy_resize.jpg',
      'http://i.ytimg.com/vi/XS6HKjjYlb0/maxresdefault.jpg',
      'http://i.telegraph.co.uk/multimedia/archive/02743/markets_2743834b.jpg'
    ]
  };
}]);