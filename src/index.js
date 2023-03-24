import timer from './modules/timer';
import menu from './modules/menu';
import modal from './modules/modal';
import valid from './modules/valid';
import tabs from './modules/tabs';
import scroll from './modules/scroll';
import slider from './modules/slider';
import calc from './modules/calc';

timer('28 june 2023');
menu();
modal();
valid();
tabs();
scroll();
calc(100);

slider({
    slider: 'portfolio-content',
    items: 'portfolio-item',
    slideActive: 'portfolio-item-active',
    dotActive: 'dot-active'
})
