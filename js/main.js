//        $(function() {
//            $.getScript('//connect.facebook.net/en_US/sdk.js', function() {
//                FB.init({
//                    appId: '476189115902735',
//                    version: 'v2.5'
//                });
//
//                $('#button0').click(function() {
//                    FB.ui({
//                        method: 'feed',
//                        name: 'Share 0',
//                        link: 'https://www.google.com.ua/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q=Share+0',
//                        picture: 'http://placehold.it/350x150/1e6bb8',
//                        caption: 'Caption 0',
//                        description: 'Description 0',
//                        message: 'Message 0'
//                    });
//                });
//
//                $('#button1').click(function() {
//                    FB.ui({
//                        method: 'feed',
//                        name: 'Share 1',
//                        link: 'https://www.google.com.ua/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q=Share+1',
//                        picture: 'http://placehold.it/350x150/B84443',
//                        caption: 'Caption 1',
//                        description: 'Description 1',
//                        message: 'Message 1'
//                    });
//                });
//
//                $('#button2').click(function() {
//                    FB.ui({
//                        method: 'stream.publish',
//                        display: 'iframe',
//                        user_message_prompt: 'User message prompt',
//                        message: 'Message',
//                        attachment: {
//                            name: 'Attachment name',
//                            caption: 'Attachment caption',
//                            description: 'Attachment description',
//                            href: 'https://www.google.com.ua/search?q=Attachment+href&oq=Attachment+href&aqs=chrome..69i57.187j0j9&sourceid=chrome&ie=UTF-8',
//                            media: [{
//                                'type': 'image',
//                                'src': 'http://placehold.it/350x150/3DFF4B',
//                                'href': 'https://www.google.com.ua/search?q=media+type+image&oq=media+type+image&aqs=chrome..69i57j0l5.364j0j9&sourceid=chrome&ie=UTF-8'
//                            }],
//                            properties: {
//                                '1)': {
//                                    'text': 'Prop text 1',
//                                    'href': 'https://www.google.com.ua/search?q=Prop+text+1&oq=Prop+text+1&aqs=chrome..69i57j0l5.218j0j7&sourceid=chrome&ie=UTF-8'
//                                },
//                                '2)': {
//                                    'text': 'Prop text 2',
//                                    'href': 'https://www.google.com.ua/search?q=Prop+text+2&oq=Prop+text+2&aqs=chrome..69i57j0l5.420j0j9&sourceid=chrome&ie=UTF-8'
//                                },
//                                '3)': {
//                                    'text': 'Prop text 3',
//                                    'href': 'https://www.google.com.ua/search?q=Prop+text+3&oq=Prop+text+3&aqs=chrome..69i57j0l5.287j0j9&sourceid=chrome&ie=UTF-8'
//                                }
//                            }
//                        },
//                        action_links: [{
//                            text: 'Action links text',
//                            href: 'https://www.google.com.ua/search?q=Action+links&oq=Action+links&aqs=chrome..69i57j0l5.575j0j4&sourceid=chrome&ie=UTF-8'
//                        }]
//                    });
//                });
//
//                $('#button3').on('click', function() {
//                    FB.ui({
//                        method: 'share',
//                        href: 'http://boroda.github.io/share-buttons/',
//                    }, function(response){
//                        console.log(response);
//                    });
//                });
//
//                $('#button4').on('click', function() {
//                    FB.ui({
//                        method: 'share_open_graph',
//                        action_type: 'og.likes',
//                        action_properties: JSON.stringify({
//                            object: 'http://boroda.github.io/share-buttons/index2.html',
//                        })
//                    }, function(response) {
//                        console.log(response);
//                    });
//                });
//            });
//        });

$('#pinterest').on('click', function (e) {
    PinUtils.pinOne({
        'url': $('meta[property="og:url"]').attr('content'),
        'media': $('meta[property="og:image"]').attr('content'),
        'description': $('meta[property="og:description"]').attr('content')
    });
});

$('#facebook').on('click', function() {
    var FB = window.FB;

    if (FB && FB.ui) {
        FB.ui({
            method: 'share',
            href: window.location.href
        });
    } else {
        console.error('"ShareViaFacebook.shareData" >> Facebook object (FB) is undefined');
    }
});

$('#twitter').on('click', function() {
    var DEFAULTS = {
        TWITTER_URL: 'http://twitter.com/share?url='
    };

    var url = DEFAULTS.TWITTER_URL + window.location.href;

    window.open(url);
});

$('#mod').on('click', function() {
    if (Modernizr) {
        // можем рисовать!
        alert('Canvas works!');
    } else {
        // в противном случае выполняем fallback
        alert('Canvas does not work!');
    }
});
