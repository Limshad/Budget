var sensationApp = angular.module('sensationApp');

// Home Data: Home page configuration
sensationApp.factory('Data', function(){
    var data = {};
    
    data.items = [
	    
         { 
            title: 'Our Fleet',
            icon: 'truck',
            page: 'products.html'
        },
		{ 
            title: 'Our Locations',
            icon: 'map-marker',
            page: 'map.html'
        },
		{ 
            title: 'Booking',
            icon: 'book',
            page: 'booking.html'
        },
		{ 
            title: 'Special Offers',
            icon: 'gift',
            page: 'products.html'
        },
		{ 
            title: 'Gateway Program',
            icon: 'credit-card',
            page: 'loginloyalty.html'
        },
        { 
            title: 'News and Events',
            icon: 'bullhorn',
            page: 'news.html'
        },
        { 
            title: 'Lease Enquiry',
            icon: 'envelope-o',
            page: 'lease.html'
        },
        { 
            title: 'Contact',
            icon: 'phone',
            page: 'contact.html'
        },
       

    ]; 
    
    return data;
});

// Menu Data: Menu configuration
sensationApp.factory('MenuData', function(){
    var data = {};
    
    data.items = [
         { 
            title: 'Home',
            icon: 'home',
            page: 'home.html'
        }, 
         { 
            title: 'Our Fleet',
            icon: 'truck',
            page: 'products.html'
        },
		{ 
            title: 'Booking',
            icon: 'book',
            page: 'booking.html'
        },
		{ 
            title: 'Our Locations',
            icon: 'map-marker',
            page: 'map.html'
        },
		{ 
            title: 'Special Offers',
            icon: 'gift',
            page: 'products.html'
        },
		{ 
            title: 'Gateway Program',
            icon: 'credit-card',
            page: 'loginloyalty.html'
        },
        { 
            title: 'News and Events',
            icon: 'bullhorn',
            page: 'news.html'
        },
        { 
            title: 'Lease Enquiry',
            icon: 'envelope-o',
            page: 'map.html'
        },
        { 
            title: 'Contact',
            icon: 'phone',
            page: 'contact.html'
        }

    ]; 
    
    return data;
});

// Map Data: Map configuration
sensationApp.factory('MapData', function(){
    var data = {};
    
    data.map = {
        zoom: 7,
        center: {
            latitude: 25.254435,
            longitude: 55.330049
        },
        markers: [
        {
            id: 1,
            icon: 'img/budget_location.png',
            latitude: 25.209600489527897,
            longitude: 55.274620028110014,
            title: 'Warwick Hotel, In-between Interchange 1 (Sheikh Zayed Road) and defence roundabout'
        }, 
        {
            id: 2,
			icon: 'img/budget_location.png',
            latitude: 25.252000,
            longitude: 55.334951, 
            title: 'Zeenah Building , Opp. Deira City Centre, Dubai'
        },
        {
            id: 3,
			icon: 'img/budget_location.png',
            latitude: 24.967151691530376,
            longitude: 55.20097732543945,
            title: 'HQ, Dubai Investment Park 2'
        },
        {
            id: 4,
			icon: 'img/budget_location.png',
            latitude: 25.234428500880632,
            longitude: 55.37615776062694,
            title: 'Umm Ramool, Liberty Service Centre, Behind Old RTA office, Dubai'
        },
        {
            id: 5,
			icon: 'img/budget_location.png',
            latitude: 25.249664387120884,
            longitude: 55.35186767578125,
            title: 'Dubai International Airport'
        },
        {
            id: 6,
			icon: 'img/budget_location.png',
            latitude: 24.89795934420355,
            longitude: 55.14312744205586,
            title: 'Dubai World Central (Al Maktoum International Airport)'
        },
        {
            id: 7,
			icon: 'img/budget_location.png',
            latitude: 25.07266631080836,
            longitude: 55.13822570443154,
            title: 'Dubai Marina, Marina Branch The Cascades building Ground floor Near Horizon tower / OPP JLT metro station Dubai Marin.'
        },
        {
            id: 8,
			icon: 'img/budget_location.png',
            latitude: 25.10291308570634,
            longitude: 55.17229914670315,
            title: 'Gloria Hotel, On Sheikh Zayed Road and right in front of Internet City Metro station.'
        },
        {
            id: 9,
			icon: 'img/budget_location.png',
            latitude: 24.986106644811503,
            longitude: 55.09026646614075,
            title: 'Jebel Ali, Budget Rent a Car is situated in Building LOB 16.'
        },
        {
            id: 10,
			icon: 'img/budget_location.png',
            latitude: 25.339943848506906,
            longitude: 55.40321588516235,
            title: 'King Abdul Aziz St. Sharjah'
        },
        {
            id: 11,
			icon: 'img/budget_location.png',
            latitude: 25.28560186119636,
            longitude: 55.45291721821013,
            title: 'Liberty Building , Al Wahda Street, Sharjah'
        }
		,
        {
            id: 12,
			icon: 'img/budget_location.png',
            latitude: 25.32840439826367,
            longitude: 55.51226377484966,
            title: 'Sharjah Intl Airport, Terminal 1 arrival hall after the baggage hall.'
        },
        {
            id: 13,
			icon: 'img/budget_location.png',
            latitude: 25.332913642184312,
            longitude: 55.48321008682251,
            title: 'Sharjah SAIF Zone, Executive Suite Z1-05, Sharjah'
        },
        {
            id: 14,
			icon: 'img/budget_location.png',
            latitude: 24.429020863606876,
            longitude: 54.64290619109306,
            title: 'Abu Dhabi Intl Airport, Sky Park Plaza opposite to Etihad Airways Terminal 3'
        },
        {
            id: 15,
			icon: 'img/budget_location.png',
            latitude: 24.485400826716102,
            longitude: 54.36586618423462,
            title: 'Abu Dhabi City Office, after the Defence Bridge opposite to the National Bank of Abu Dhabi.'
        },
        {
            id: 16,
			icon: 'img/budget_location.png',
            latitude: 25.68601042968201,
            longitude: 55.77445507025937,
            title: 'Al Hamra Fort Hotel & Beach Resort.'
        },
        {
            id: 17,
			icon: 'img/budget_location.png',
            latitude: 25.79602736407181,
            longitude: 55.96877574797589,
            title: 'Hilton Hotel, Ras al-Khaimah'
        },
        {
            id: 18,
			icon: 'img/budget_location.png',
            latitude: 25.814572531237417,
            longitude: 55.95813274428292,
            title: 'Hilton Resort & Spa, Emirates road, Ras Al Khaima'
        },
        {
            id: 19,
			icon: 'img/budget_location.png',
            latitude: 25.134066620850533,
            longitude: 56.333137750614924,
            title: 'Fujairah, Madhab/Showroom Road in Liberty Showroom.'
        },
        {
            id: 20,
			icon: 'img/budget_location.png',
            latitude: 24.195459663935306,
            longitude: 55.67150115966797,
            title: 'Al Ain, Ayla Hotel, Street#122 The first Khalifa Bin Zayed street, Behind New Medical Center.'
        }
		]
    };

    return data;
});

// Gallery Data: Gallery configuration
sensationApp.factory('GalleryData', function(){
    var data = {};
    
    data.items = [
        { 
            label: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            src: 'img/gallery-1.jpg',
            location: 'New York, June 2014'
        },
        { 
            label: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
            src: 'img/gallery-2.jpg',
            location: 'Athens, August 2013'
        },
        { 
            label: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            src: 'img/gallery-3.jpg',
            location: 'Tokyo, May 2013'
        }
    ]; 
    
    return data;
});

// Products Data: JSON Products configuration
sensationApp.factory('ProductsData', function(){
    
    var data = { url: 'json/products.json', letterLimit: 100 };
    
    return data;
});

// News Data: JSON News configuration
sensationApp.factory('LocationData', function(){
    $('.loading_up').fadeIn('slow');
    var data = { url: 'http://dev.1callgroup.com/budgetmobile/locations.php', letterLimit: 100 };
	 return data;
});
// News Data: JSON Location configuration
sensationApp.factory('NewsData', function(){
    $('.loading_up').fadeIn('slow');
    var data = { url: 'http://dev.1callgroup.com/budgetmobile/latestnews.php', letterLimit: 100 };
	 return data;
});

// Posts Data: JSON Wordpress Posts configuration
sensationApp.factory('PostsData', function(){
    
    /* (For DEMO purposes) Local JSON data */
    var data = { url: 'json/wordpress.json' };
    
    /* Set your URL as you can see in the following example */
    // var data = { url: 'YourWordpressURL/?json=get_recent_posts' };
    
    /* With user-friendly permalinks configured */
    // var data = { url: 'YourWordpressURL/api/get_recent_posts' };
    
    return data;
});

// Server Posts Data (Server side pagination with AngularJS)
sensationApp.factory('ServerPostsData', function(){
    
    /* (For DEMO purposes) Local JSON data */
    var data = { url: 'json/serverposts&' };
    
    /* Set your URL as you can see in the following example */
    /* NOTE: In case of the default permalinks, you should add '&' at the end of the url */
    // var data = { url: 'YourWordpressURL/?json=get_recent_posts&' };
    
    /* With user-friendly permalinks configured */
    /* NOTE: In case of the user-friendly permalinks, you should add '?' at the end of the url */
    // var data = { url: 'YourWordpressURL/api/get_recent_posts?' };
    
    return data;
});

// Categories Data: JSON Categories configuration
sensationApp.factory('CategoriesData', function(){
    
    /* (For DEMO purposes) Local JSON data */
    var data = { url: 'json/categories.json',
                 category_url: 'json/category' };
    
    /* Set your URL as you can see in the following example */
    // var data = { url: 'YourWordpressURL/?json=get_category_index',
    //             category_url: 'YourWordpressURL/?json=get_category_posts&' };
    
    /* With user-friendly permalinks configured */
    // var data = { url: 'YourWordpressURL/api/get_category_index',
    //             category_url: 'YourWordpressURL/api/get_category_posts?' };
    
    return data;
});

// About Data: JSON News configuration
sensationApp.factory('AboutData', function(){
    
    var data = { url: 'json/about.json' };
    
    return data;
});

// NVD3Data Data: JNVD3Data configuration
sensationApp.factory('NVD3Data', function(){
    
    var data = {};
    
    data.options = {
            chart: {
                type: 'discreteBarChart',
                margin : {
                    top: 20,
                    right: 20,
                    bottom: 40,
                    left: 65
                },
                x: function(d){return d.label;},
                y: function(d){return d.value;},
                showValues: true,
                valueFormat: function(d){
                    return d3.format(',.4f')(d);
                },
                transitionDuration: 500,
                xAxis: {
                    axisLabel: 'X Axis'
                },
                yAxis: {
                    axisLabel: 'Y Axis',
                    axisLabelDistance: 30
                }
            }
        };

    data.data = [
            {
                key: "Cumulative Return",
                values: [
                    {
                        "label" : "A" ,
                        "value" : -29.765957771107
                    } ,
                    {
                        "label" : "B" ,
                        "value" : 0
                    } ,
                    {
                        "label" : "C" ,
                        "value" : 32.807804682612
                    } ,
                    {
                        "label" : "D" ,
                        "value" : 196.45946739256
                    } ,
                    {
                        "label" : "E" ,
                        "value" : 0.19434030906893
                    } ,
                    {
                        "label" : "F" ,
                        "value" : -98.079782601442
                    } ,
                    {
                        "label" : "G" ,
                        "value" : -13.925743130903
                    } ,
                    {
                        "label" : "H" ,
                        "value" : -5.1387322875705
                    }
                ]
            }
        ];
    
    return data;
});

// Plugins Data: Mobile Plugins configuration
sensationApp.factory('PluginsData', function(){
    var data = {};
    
    data.items = [
        { 
            title: 'Device Plugin',
            icon: 'mobile',
            page: 'device.html'
        },
        { 
            title: 'Notifications Plugin',
            icon: 'exclamation',
            page: 'notifications.html'
        },
        { 
            title: 'Geolocation Plugin',
            icon: 'location-arrow',
            page: 'geolocation.html'
        },
        { 
            title: 'Barcode Scanner',
            icon: 'barcode',
            page: 'barcodescanner.html'
        }
    ]; 
    
    return data;
});

// Settings Data: Settings configuration
sensationApp.factory('SettingsData', function(){
    var data = {};
    
    data.items = {
        options: [
        {
           name: 'First Setting',
           value: true
        }, 
        {
           name: 'Second Setting',
           value: false
        }, 
        {
           name: 'Third Setting',
           value: false
        }, 
        {
           name: 'Fourth Setting',
           value: false
        }, 
        {
           name: 'Fifth Setting',
           value: false
        }],
        range:30
    };

    return data;
});

// RSS Data: Feeds configuration
sensationApp.factory('FeedData', function(){
    
    var data = { url: 'https://developer.apple.com/news/rss/news.rss' };
    
    return data;
});

// FEED Data Structure: JSON FEED Data Structure configuration
sensationApp.factory('FeedPluginData', function(){
    
    var data = { url: 'json/structure.json' };
    
    return data;
});