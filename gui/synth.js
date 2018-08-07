class Synth {
    constructor(s) {
        this.svg = s;
        this.elements = {
            osc1: {},
            osc2: {},
            env: {},
            scl: {}
        };
    }
    
    addOsc(l, x, y, n) {
        l.g = new Group(10 + x, 60 + y, 210 + x, 260 + y, 'Osc ' + n, svg);
        
        l.uni = {};
        l.det = {};
        l.ble = {};
        l.pan = {};
        l.lev = {};

        l.uni.k = new Knob(60 + x, 115 + y, 25, 0.6, '#096', this.svg);
        l.uni.t = new Text(80 + x, 120 + y, 'start', 'Vcs', '#333', this.svg);
        l.uni.i = new Text(40 + x, 120 + y, 'end', '10', '#096', this.svg);

        l.det.k = new Knob(60 + x, 165 + y, 25, 0.3, '#096', this.svg);
        l.det.t = new Text(80 + x, 170 + y, 'start', 'Det', '#333', this.svg);
        l.det.i = new Text(40 + x, 170 + y, 'end', '60', '#096', this.svg);

        l.ble.k = new Knob(60 + x, 215 + y, 25, 0.3, '#096', this.svg);
        l.ble.t = new Text(80 + x, 220 + y, 'start', 'Bld', '#333', this.svg);
        l.ble.i = new Text(40 + x, 220 + y, 'end', '30', '#096', this.svg);

        l.pan.k = new Knob(160 + x, 115 + y, 25, 0.6, '#c90', this.svg);
        l.pan.t = new Text(140 + x, 120 + y, 'end', 'Pan', '#333', this.svg);
        l.pan.i = new Text(180 + x, 120 + y, 'start', '10', '#c90', this.svg);

        l.lev.k = new Knob(160 + x, 165 + y, 25, 0.6, '#c90', this.svg);
        l.lev.t = new Text(140 + x, 170 + y, 'end', 'Lev', '#333', this.svg);
        l.lev.i = new Text(180 + x, 170 + y, 'start', '10', '#c90', this.svg);
    }

    build(s) {
        let svg = this.svg;
        /*
                <g>
                    <rect x="0" y="49" width="750" height="1" fill="#ccc"></rect>
                    <rect x="0" y="0" width="750" height="500" fill-opacity="0" stroke="#333" stroke-width="2"></rect>
                    <text x="10" y="40" fill="#000" class="title">Synth</text>
                </g>*/
        
        this.addOsc(this.elements.osc1, 0, 0, 1);
        this.addOsc(this.elements.osc2, 0, 200, 2);

        //adsr
        
        let env = this.elements.env;
        
        env.att = {};
        env.dec = {};
        env.sus = {};
        env.rel = {};

        env.g = new Group(210, 260, 410, 460, 'Envelope', svg);

        env.att.s = new Slider(250, 365, 100, 0.1, '#069', svg);
        env.att.t = new Text(250, 440, 'middle', 'A', '#333', svg);
        env.att.i = new Text(250, 305, 'middle', '9', '#333', svg);

        env.dec.s = new Slider(290, 365, 100, 0.8, '#069', svg);
        env.dec.t = new Text(290, 440, 'middle', 'D', '#333', svg);
        env.dec.i = new Text(290, 305, 'middle', '165', '#333', svg);

        env.sus.s = new Slider(330, 365, 100, 0.6, '#069', svg);
        env.sus.t = new Text(330, 440, 'middle', 'S', '#333', svg);
        env.sus.i = new Text(330, 305, 'middle', '60', '#333', svg);

        env.rel.s = new Slider(370, 365, 100, 0.2, '#069', svg);
        env.rel.t = new Text(370, 440, 'middle', 'R', '#333', svg);
        env.rel.i = new Text(370, 305, 'middle', '27', '#333', svg);

        //ehh

        /*let wavr = new Radio();

        let wavb1 = new Button(570, 200, 20, false, '#903', svg);
        let wavb2 = new Button(570, 250, 20, false, '#903', svg);
        let wavb3 = new Button(570, 300, 20, true, '#903', svg);
        let wavb4 = new Button(570, 350, 20, false, '#903', svg);

        let wavt1 = new Text(590, 205, 'left', 'SINE', '#333', svg);
        let wavt2 = new Text(590, 255, 'left', 'SQUARE', '#333', svg);
        let wavt3 = new Text(590, 305, 'left', 'SAW', '#333', svg);
        let wavt4 = new Text(590, 355, 'left', 'TRIANGLE', '#333', svg);

        wavr.add(wavb1);
        wavr.add(wavb2);
        wavr.add(wavb3);
        wavr.add(wavb4);*/
        
        let scl = this.elements.scl;

        scl.fil = {};
        
        scl.fil.o = new Open(20, 480, 20, '#903', svg);
        scl.fil.t = new Text(40, 485, 'left', 'LOAD .SCL', '#333', svg);

        /*let resk = new Knob(650, 100, 50, 0.6, '#c90', svg);
        let rest = new Text(650, 150, 'middle', 'FREQ', '#333', svg);
        let resi = new Text(650, 105, 'middle', '3.1', '#c90', svg);

        //stuff



        let t = new Graph(700, 300, [400, 200], [], '#333', svg);*/
    }
}