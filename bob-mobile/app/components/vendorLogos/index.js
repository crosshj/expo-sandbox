import burgerking from './burgerking';
import chipotle from './chipotle';
import fiveguys from './fiveguys';
import mcdonalds from './mcdonalds';
import publix from './publix';
import radioshack from './radioshack';
import shell from './shell';
import target from './target';
import walmart from './walmart';
import wendys from './wendys';

const logos = {
    burgerking, chipotle, fiveguys, mcdonalds, publix,
    radioshack, shell, target, walmart, wendys
};

export default title => logos[title.toLowerCase().replace(' ', '')] || (() => undefined);
