
        const tryRequire = (path) => {
        	try {
        	const image = require(`${path}`);
        	return image
        	} catch (err) {
        	return false
        	}
        };

        export default {
        
	questionMark: require('./questionMark.png'),
	Homepage_Rectangle22: tryRequire('./Homepage_Rectangle22.png') || require('./questionMark.png'),
	HomepageLogedIn_Rectangle22: tryRequire('./HomepageLogedIn_Rectangle22.png') || require('./questionMark.png'),
	Homepage_peakpx1: tryRequire('./Homepage_peakpx1.png') || require('./questionMark.png'),
	Homepage__21: tryRequire('./Homepage__21.png') || require('./questionMark.png'),
	Homepage_search41: tryRequire('./Homepage_search41.png') || require('./questionMark.png'),
	Homepage_Line1: tryRequire('./Homepage_Line1.png') || require('./questionMark.png'),
	HomepageLogedIn_Line1: tryRequire('./HomepageLogedIn_Line1.png') || require('./questionMark.png'),
	HomepageLogedIn__2590507011: tryRequire('./HomepageLogedIn__2590507011.png') || require('./questionMark.png'),
	HomepageLogedIn_protection: tryRequire('./HomepageLogedIn_protection.png') || require('./questionMark.png'),
	HomepageLogedIn_customerservice1: tryRequire('./HomepageLogedIn_customerservice1.png') || require('./questionMark.png'),
	HomepageLogedIn_bestoffer: tryRequire('./HomepageLogedIn_bestoffer.png') || require('./questionMark.png'),
	HomepageLogedIn_ezgif16c1f1f486c: tryRequire('./HomepageLogedIn_ezgif16c1f1f486c.png') || require('./questionMark.png'),
	HomepageLogedIn_ezgif16c1f1f486c_1: tryRequire('./HomepageLogedIn_ezgif16c1f1f486c_1.png') || require('./questionMark.png'),
	HomepageLogedIn_ezgif16c1f1f486c_2: tryRequire('./HomepageLogedIn_ezgif16c1f1f486c_2.png') || require('./questionMark.png'),
	HomepageLogedIn_facebook21: tryRequire('./HomepageLogedIn_facebook21.png') || require('./questionMark.png'),
	HomepageLogedIn_twitter1: tryRequire('./HomepageLogedIn_twitter1.png') || require('./questionMark.png'),
	HomepageLogedIn_instagram11: tryRequire('./HomepageLogedIn_instagram11.png') || require('./questionMark.png'),
	HomepageLogedIn_linkedin1: tryRequire('./HomepageLogedIn_linkedin1.png') || require('./questionMark.png'),
	HomepageLogedIn_Ellipse1: tryRequire('./HomepageLogedIn_Ellipse1.png') || require('./questionMark.png'),
	HomepageLogedIn_bell3: tryRequire('./HomepageLogedIn_bell3.png') || require('./questionMark.png'),
	HomepageLogedIn_mail3: tryRequire('./HomepageLogedIn_mail3.png') || require('./questionMark.png'),
	HomepageLogedIn_downarrow11: tryRequire('./HomepageLogedIn_downarrow11.png') || require('./questionMark.png'),
}