/**
 * Empty object for groups in scenegraph.
 * 
 * @namespace cog1.data
 * @module myModel
 */
 define(["exports", "data"], function(exports, data) {
    "use strict";
  
    let index = 0;
    let instance = {};
    /**
     * Create an instance of the model defined in this module.
     * 
     * @parameter object with fields:
     * @returns instance of this model.
     */
    exports.create = function(parameter) {
        
        // Instance of the model to be returned.
        
        var scale = parameter.scale ? parameter.scale : 100;
        
        instance.vertices = [];
        const b = newVertex(-1.4,-5.5,1.5);
        const b2 = newVertex(0,-5.5,2);

        const a = newVertex(-1.4,-5.5,2.2);
        const a2 = newVertex(0,-5.5,2.7);
        const a3 = newVertex(-1.4,-5.2,2.2);
        const a4 = newVertex(0,-5.2,2.7);
        const a5 = newVertex(-1.4,-5.2,1.5);
        const a6 = newVertex(0,-5.2,2);

        const a7 = newVertex(-1.4,-4.9,1.5);
        const a8 = newVertex(0,-4.9,2);
        const a9 = newVertex(-1.4,-4.9,1.9);
        const a10 = newVertex(0,-4.9,2.4);
        const a11 = newVertex(-1.4,-5.2,1.9);
        const a12 = newVertex(0,-5.2,2.4);

        const c = newVertex(-1.4,-5.5,1.5);
        const c1 = newVertex(0,-5.5,2);
        const c2 = newVertex(-1.4,-5.5,2.5);
        const c3 = newVertex(0,-5.5,3);
        const c4 = newVertex(-1.4,-5.8,1.5);
        const c5 = newVertex(0,-5.8,2);
        const c6 = newVertex(-1.4,-5.8,2.5);
        const c7 = newVertex(0,-5.8,3);

        const otur1 = newVertex(-0.2,6.2,1.3);
        const otur2 = newVertex(-0.8,6.2,1.1);
        const otur3 = newVertex(-0.2,5,1.3);
        const otur4 = newVertex(-0.8,5,1.1);

        const schnurro= newVertex(0,7.6,0);
        const schnurru= newVertex(0,7.4,0);

        const lampe1= newVertex(-0.3,7.2,0);
        const lampe2= newVertex(0.3,7.2,0);
        const lampe4= newVertex(0,7.2,-0.2);
        const lampe5= newVertex(0,7.2,0.2);
        const lampe6= newVertex(0,7,0);

        const dhaus11 = newVertex(-0.8,8,0);
        const dhaus12 = newVertex(0.8,8,0);

        const dhaus1 = newVertex(-0.8, 7.8,0.8);
        const dhaus2 = newVertex(0.8,7.8,0.8);
        const dhaus3 = newVertex(0.8,7.8,-0.8);
        const dhaus4 = newVertex(-0.8,7.8,-0.8);

        const shaus1 = newVertex(-0.7, 7.6,0.8);
        const shaus2 = newVertex(0.7,7.6,0.8);
        const shaus3 = newVertex(-0.7,6.6,0.8);
        const shaus4 = newVertex(0.7,6.6,0.8);

        const shaus5 = newVertex(0.7,7.6,-0.8);
        const shaus6 = newVertex(-0.7,7.6,-0.8);
        const shaus7 = newVertex(0.7,6.6,-0.8);
        const shaus8 = newVertex(-0.7,6.6,-0.8);

        const shausa = newVertex(0.7, 7.6,0.6);
        const shausb = newVertex(0.7, 7.6,-0.6);
        const shausc = newVertex(0.7, 6.6,0.6);
        const shausd = newVertex(0.7, 6.6,-0.6);

        const shause = newVertex(-0.7, 7.6,0.6);
        const shausf = newVertex(-0.7, 7.6,-0.6);
        const shausg = newVertex(-0.7, 6.6,0.6);
        const shaush = newVertex(-0.7, 6.6,-0.6);

        const fhaus1 = newVertex(-0.8,6.4,0.8);
        const fhaus2 = newVertex(0.8,6.4,0.8);
        const fhaus3 = newVertex(0.8,6.4,-0.8);
        const fhaus4 = newVertex(-0.8,6.4,-0.8);

        const fhaus5 = newVertex(-0.7,6.4,0.6);
        const fhaus6 = newVertex(0.7,6.4,0.6);
        const fhaus7 = newVertex(0.7,6.4,-0.6);
        const fhaus8 = newVertex(-0.7,6.4,-0.6);

        const zaun1 = newVertex(-1.4,5.5,1.5);
        const zaun2 = newVertex(0,5.5,2);
        const zaun3 = newVertex(1.4,5.5,1.5);
        const zaun4 = newVertex(2.0,5.5,-0.1);
        const zaun5 = newVertex(1.4,5.5,-1.5);
        const zaun6 = newVertex(0,5.5,-2);
        const zaun7 = newVertex(-1.4,5.5,-1.5);
        const zaun8 = newVertex(-2,5.5,0.1);
        const zaun9 = newVertex(-1.4,5.5,1.5);

		const zUnten1 = newVertex(-1.4,5,1.5);
        const zUnten2 = newVertex(0,5,2);
        const zUnten3 = newVertex(1.4,5,1.5);
        const zUnten4 = newVertex(2.0,5,-0.1);
        const zUnten5 = newVertex(1.4,5,-1.5);
        const zUnten6 = newVertex(0,5,-2);
        const zUnten7 = newVertex(-1.4,5,-1.5);
        const zUnten8 = newVertex(-2, 5,0.1);
        const zUnten9 = newVertex(-1.4,5,1.5);
         //Säule
         const sragend1 = newVertex(-1,6.4,1);
         const sragend2 = newVertex(1,6.4,1);
         const sragend3 = newVertex(1,6.4,-1);
         const sragend4 = newVertex(-1,6.4,-1);
         const sragend5 = newVertex(-1.4,6.4,0);
         const sragend6 = newVertex(0,6.4,1.4);
         const sragend7 = newVertex(1.4,6.4,0);
         const sragend8 = newVertex(0,6.4,-1.4);

        const sOben1 = newVertex(-1,5,1);
        const sOben2 = newVertex(1,5,1);
        const sOben3 = newVertex(1,5,-1);
        const sOben4 = newVertex(-1,5,-1);
        const sOben5 = newVertex(-1.4,5,0);
        const sOben6 = newVertex(0,5,1.4);
        const sOben7 = newVertex(1.4,5,0);
        const sOben8 = newVertex(0,5,-1.4);
  
        const sUnten1 = newVertex(-1.4,-5.8,1.5);
        const sUnten2 = newVertex(0,-5.8,2);
        const sUnten3 = newVertex(1.4,-5.8,1.5);
        const sUnten4 = newVertex(2.0,-5.8,-0.1);
        const sUnten5 = newVertex(1.4,-5.8,-1.5);
        const sUnten6 = newVertex(0,-5.8,-2);
        const sUnten7 = newVertex(-1.4,-5.8,-1.5);
        const sUnten8 = newVertex(-2,-5.8,0.1);
        const sUnten9 = newVertex(-1.4,-5.8,1.5);
  
        const utur1 = newVertex(-0.3,-4.9,1.9);
        const utur2 = newVertex(-1.1,-4.9,1.6);
        const utur3 = newVertex(-0.3,-3.6, 1.8);
        const utur4 = newVertex(-1.1,-3.6, 1.5);

        const trenn1 = newVertex(-1.3,-3, 1.4);
        const trenn2 = newVertex(0,-3, 1.9);
        const trenn3 = newVertex(1.3,-3,1.3);
        const trenn4 = newVertex(1.9,-3,-0.1);
        const trenn5 = newVertex(1.3,-3,-1.3);
        const trenn6 = newVertex(0,-3,-2);
        const trenn7 = newVertex(-1.3,-3,-1.4);
        const trenn8 = newVertex(-1.9,-3,-0.1);

        const mtrenn1 = newVertex(-1.2,0, 1.3);
        const mtrenn2 = newVertex(-0.1,0, 1.8);
        const mtrenn3 = newVertex(1.1,0,1.3);
        const mtrenn4 = newVertex(1.7,0,-0.2);
        const mtrenn5 = newVertex(1.1,0,-1.3);
        const mtrenn6 = newVertex(-0.1,0,-1.6);
        const mtrenn7 = newVertex(-1.1,0,-1.3);
        const mtrenn8 = newVertex(-1.7,0,-0.2);
       
        const otrenn1 = newVertex(-1,4,1);
        const otrenn2 = newVertex(1,4,1);
        const otrenn3 = newVertex(1,4,-1);
        const otrenn4 = newVertex(-1,4,-1);
        const otrenn5 = newVertex(-1.4,4,0);
        const otrenn6 = newVertex(0,4,1.4);
        const otrenn7 = newVertex(1.4,4,0);
        const otrenn8 = newVertex(0,4,-1.4);

        instance.polygonVertices = [
            [trenn1,trenn2,trenn3, trenn4, trenn5, trenn6,trenn7, trenn8],
            [mtrenn1,mtrenn2,mtrenn3, mtrenn4, mtrenn5, mtrenn6,mtrenn7, mtrenn8],
            [otrenn1,otrenn6,otrenn2, otrenn7, otrenn3, otrenn8,otrenn4, otrenn5,otrenn1],
            [utur1,utur3,utur4,utur2], 
            [c2,c6, c7, c3],
            [c4,c6, c7, c5], 
            [c,c2, c3, c1], 
            [a9,a11, a12, a10], 
            [a7,a9,a10,a8], 
            [a3,a5, a6 , a4], 
            [a, a3, a4, a2], 
            [a,b, b2, a2], 
            [a6,a8,a10,a12],//Seitenrand Treppen 3 Stufe
            [a7,a9,a11,a5], //Seitenrand Treppen 3 Stufe
            [b2, a2,a4,  a6,],// Seitenrand Treppen 2 Stufe         
            [b,a5, a3, a],// Seitenrand Treppen 2 Stufe
            [b, c4,c6, c2], // Seitenrand Treppen 1 Stufe
            [b2,c5, c7, c3], //Seitenrand Treppen 1 Stufe

            [otur1,otur3,otur4,otur2], 
            [schnurro,schnurru],
            [schnurru, lampe1,lampe6,lampe2],
            [schnurru, lampe2,lampe6,lampe4],
            [schnurru, lampe4,lampe6,lampe5],
            [schnurru, lampe5,lampe6,lampe1],
            [lampe1,lampe4, lampe2, lampe5],

            [dhaus11,dhaus12],
            [dhaus11,dhaus1,dhaus4],  
            [dhaus12,dhaus2,dhaus3],  
            [dhaus1,dhaus2 ,dhaus3,dhaus4], 
            [fhaus1,fhaus2 ,fhaus3,fhaus4], 
            [fhaus5,fhaus6 ,fhaus7,fhaus8], 
            [dhaus1,fhaus1,fhaus2,dhaus2],
            [dhaus2,fhaus2, fhaus3, dhaus3], 
            [dhaus3,fhaus3, fhaus4, dhaus4], 
            [dhaus4,fhaus4, fhaus1, dhaus1], 
            [shaus1,shaus3, shaus4, shaus2], 
            [shaus5,shaus7, shaus8, shaus6], 
            [shausa,shausb,shausd, shausc ], 
            [shause,shausf,shaush, shausg ], 
        
            [zaun1, zUnten9,zUnten2, zaun2], 
            [zaun2,zUnten2, zUnten3, zaun3], 
            [zaun3,zUnten3, zUnten4, zaun4],
            [zaun4,zUnten4, zUnten5, zaun5],
            [zaun5,zUnten5, zUnten6, zaun6],
            [zaun6,zUnten6, zUnten7, zaun7],
            [zaun7,zUnten7, zUnten8, zaun8],
            [zaun8,zUnten8, zUnten9, zaun9],

            [sragend1, sOben1, sOben6,sragend6],
            [sragend2, sOben2,sOben6,sragend6],
            [sragend7, sOben7,sOben2, sragend2],
            [sragend3, sOben3, sOben7, sragend7],
            [sragend8, sOben8, sOben3, sragend3],
            [sragend4, sOben4,sOben8, sragend8],
            [sragend5,sOben5, sOben4, sragend4], 
            [sragend1,sOben1, sOben5, sragend5],

			[sOben1, zUnten1, zUnten2, sOben6],
            [sOben2, zUnten3, zUnten2, sOben6],
            [sOben7, zUnten4, zUnten3, sOben2],
            [sOben3, zUnten5, zUnten4, sOben7],
            [sOben8, zUnten6, zUnten5, sOben3],
            [sOben4, zUnten7, zUnten6, sOben8],
            [sOben5, zUnten8, zUnten7, sOben4],           
            [sOben1, zUnten9, zUnten8, sOben5], 

            [sOben1, sUnten1, sUnten2, sOben6],
            [sOben2, sUnten3, sUnten2, sOben6],
            [sOben7, sUnten4, sUnten3, sOben2],
            [sOben3, sUnten5, sUnten4, sOben7],
            [sOben8, sUnten6, sUnten5, sOben3],
            [sOben4, sUnten7, sUnten6, sOben8],
            [sOben5, sUnten8, sUnten7, sOben4],           
            [sOben1, sUnten9, sUnten8, sOben5] 
        ];

        instance.polygonColors = [];
        for(var i = 0; i < 100; i++) {
           instance.polygonColors[i] = 6;
        }
  
        for(var i = 100; i < 118; i++) {
            instance.polygonColors[i] = 7;
        }
  
        for(var i = 118; i < 126; i++) {
            instance.polygonColors[i] = 9;
        }
  
        data.applyScale.call(instance, scale);
        
       
        return instance;        
    };
  
    function newVertex(x, y, z) {
        const vertex = {index: index++, coord: [x,y,z]};
        instance.vertices.push(vertex.coord);
        return vertex.index;
    }
});