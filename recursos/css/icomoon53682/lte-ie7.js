/* Use this script if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-arrow-right' : '&#x44;',
			'icon-arrow-right-2' : '&#x64;',
			'icon-arrow-left' : '&#x49;',
			'icon-arrow-left-2' : '&#x69;',
			'icon-play' : '&#x44;&#x44;',
			'icon-checkmark' : '&#x42;',
			'icon-cancel' : '&#x78;',
			'icon-arrow-right-3' : '&#x64;&#x64;',
			'icon-arrow-left-3' : '&#x69;&#x69;',
			'icon-play-2' : '&#x64;&#x64;&#x64;',
			'icon-checkmark-2' : '&#x62;&#x62;',
			'icon-enter' : '&#x65;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; i < els.length; i += 1) {
		el = els[i];
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};