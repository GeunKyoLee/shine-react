
/**
 * Created by ProgrammingPearls on 15. 8. 7..
 */

Mixins.Aside = {
	_pinKey(position) {
		return (position && position.toLowerCase() === 'right') ?
			'aside-pin-right' : 'aside-pin-left';
	},

	_pinClass(position) {
		return (position && position.toLowerCase() === 'right') ?
			'aside-right-fixed' : 'aside-left-fixed';
	},

	isPined(position) {
		return (localStorage.getItem(this._pinKey(position)) === '1');
	},

	pin(position, state) {
		var container = $('#container');

		if (state) {
			localStorage.setItem(this._pinKey(position), '1');
			container.removeClass('aside-left-on');
			container.addClass(this._pinClass(position));
		} else {
			localStorage.setItem(this._pinKey(position), '0');
			container.removeClass(this._pinClass(position));
			container.addClass('aside-left-on');
		}
	},

	togglePin(position) {
		this.pin(position, ! this.isPined(position));
	},

	show(position) {
		var container = $('#container');

		if (! position) {
			if (this.isPined('right'))
				position = 'right';

			if (this.isPined('left'))
				position = 'left';
		}

		switch (position) {
			case 'left':
				container.removeClass('aside-right-on');
				container.addClass('aside-left-fixed');
				break;

			case 'right':
				container.removeClass('aside-left-on');
				container.addClass('aside-right-fixed');
				break;

			default:
				container.removeClass('aside-left-on');
				container.removeClass('aside-right-on');
		}
	},

	hide() {
		var container = $('#container');
		if (! this.isPined('left')) {
			container.removeClass('aside-left-on');
		}

		if (! this.isPined('right')) {
			container.removeClass('aside-right-on');
		}
	},

	toggle(position) {
		if (position === 'left' && ! this.isPined('left')) {
			$('#container').toggleClass('aside-left-on');
		} else if (position === 'right' && ! this.isPined('right')) {
			$('#container').toggleClass('aside-right-on');
		}
	}
};

