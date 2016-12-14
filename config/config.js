/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 */

var config = {
	port: 8080,
	language: 'en',
	timeFormat: 12,
	units: 'imperial',

	modules: [
		{
			module: 'alert',
		},
		{
			module: 'clock',
			position: 'top_left'
		},
		{
			module: 'calendar',
			header: 'US Holidays',
			position: 'top_left',
			config: {
				calendars: [
					{
						symbol: 'calendar-check-o ',
						url: 'webcal://www.calendarlabs.com/templates/ical/US-Holidays.ics'
					}
				]
			}
		},
		{
			module: 'compliments',
			position: 'lower_third',
			updateInterval: 360000,
			config: {
				compliments: {
					morning: [
						'Good morning, handsome!',
						'Enjoy your day!',
						'How was your sleep?',
						'Morning Sunshine',
						'Take on the day you beautiful land mermaid you!',
						'I hope your day is as nice as your face!',
						'How about adulting? Did you want to try that today?',
						'On a scale from 1 to 10, you\'re an 11!',
						'You make my data circuits skip a clock cycle!',
						'I need some time to reflect...'
					],
					afternoon: [
						'Hello, beauty!',
						'You look sexy!',
						'Looking good today!',		
						'You look symmetrical!',
						'Back so soon? Don\'t you have something to do?',
						'I\'m lucky to be your mirror!',
						'If I could high five you... I would, I promise.',
						'With an attitude like that, you\'re not completely terrible',
						'HEEEEELLLPP!!!! I\'m trapped!!!!!',
						'Being awesome is hard, but you\'ll manage.',
						'I could just hang here all day!',
						'I\'m not touch screen.',
						'I\'m a mirror and I\'m LIT!',
						'A day without sunshine is like, you know, night.',
						'Is a hot dog a sandwich?'
					],
					evening: [
						'Wow, you look hot!',
						'You look nice!',
						'Hi, sexy!',
						'Show me your moves!',
						'Ohhhh emmm geee... we look sooooo alike!',
						'Have you been working out?',
						'How about them Dubs?',
						'At least you didn\'t lose your keys today, right?',
						'You knew better, but you still did that today... SHAME on you.',
						'Seen any good movies lately?',
						'There is always a party with you here.',
						'I see a lot of my self in you.',
						'See you tomorrow!',
						'Is cereal soup?',
						'Sleep tight.'
					]
				}
			}
		},
		{
			module: 'currentweather',
			position: 'top_right',
			config: {
				location: 'San Diego',
				locationID: '',  //ID from http://www.openweathermap.org
				appid: 'be61effb2d6809cad91171f9e9bc58a6'
			}
		},
		{
			module: 'weatherforecast',
			position: 'top_right',
			header: 'Weather Forecast',
			config: {
	            location: 'San Diego',
				locationID: '',  //ID from http://www.openweathermap.org
	            appid: 'be61effb2d6809cad91171f9e9bc58a6'
			}
		},
		{
			module: 'newsfeed',
			position: 'bottom_bar',
			config: {
				feeds: [
					{
						title: "New York Times",
						url: "http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml"
					}
				],
				showSourceTitle: true,
				showPublishDate: true
			}
		},
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== 'undefined') {module.exports = config;}
