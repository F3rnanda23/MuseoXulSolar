
import  bibliografia from '../../imagenes/destacados/bibliografia.png';
import  biografiaXulSolar from '../../imagenes/destacados/biografiaXulSolar.png';
import  catalogoRazonado from '../../imagenes/destacados/catalogoRazonado.png';
import  coleccionPermanente from '../../imagenes/destacados/coleccionPermanente.png';
import  educacion from '../../imagenes/destacados/educacion.png';
import  elMuseo from '../../imagenes/destacados/elMuseo.png';
import  exposiciones from '../../imagenes/destacados/exposiciones.png';
import  testimonio from '../../imagenes/destacados/testimonio.png';
import  firmaXul from '../../imagenes/destacados/firmaXul.png';
import  carasXul from '../../imagenes/destacados/carasXul.png';
import  serpienteXul from '../../imagenes/destacados/serpienteXUl.png';

const Destacados = () =>{
    return(
        <div class="overflow-x-hidden" >

            <span class="flex items-center justify-center mt-[20px]">DESTACADO</span>

            
            <div class="ml-[30px] mr-[50px] mt-[10px] border-solid border-2 border-white-500 bg-gray-100">
                <div class="grid grid-cols-4 grid-rows-3 gap-4 mr-[30px] ml-[30px] mt-[20px] mb-[20px] " >
                  
                    <div>
                        <img src={firmaXul} alt="Descripción de la imagen" class="w-full h-[100px] mt-[65px]" />
                    </div>

                    <div>
                        <a href="https://www.xulsolar.org.ar/bibliografia.html" class="relative group">
                            <img src={bibliografia} alt="Descripción de la imagen" class="w-full h-[300px] mt-[65px] object-cover transition-transform transform group-hover:scale-105" />
                            <p class="absolute bottom-0 left-0 w-full px-2 py-1 text-white bg-black bg-opacity-75 transition-opacity opacity-0 group-hover:opacity-100">BIBLIOGRAFÍA</p>
                        </a>
                    </div>
                    
                    <div>
                        <a href="https://www.xulsolar.org.ar/biografia.html" class="relative group">
                            <img src={biografiaXulSolar} alt="Descripción de la imagen" class="w-full h-[200px] object-cover transition-transform transform group-hover:scale-105"/>
                            <p class="absolute bottom-0 left-0 right-0 px-2 py-1 text-white bg-black bg-opacity-75 transition-opacity opacity-0 group-hover:opacity-100 text-center">BIBLIOGRAFÍA XUL SOLAR</p>
                        </a>
                    </div>

                    <div>
                        <img src={carasXul} alt="Descripción de la imagen" class="w-full h-[100px] mt-[65px]" />
                    </div>
                    
                    <div>
                        <a href="https://www.xulsolar.org.ar/catalogo.html" class="relative group">
                            <img src={catalogoRazonado} alt="Descripción de la imagen"  class="w-full h-[150px] mt-[0px] object-cover transition-transform transform group-hover:scale-105" />
                            <p class="absolute bottom-0 left-0 w-full px-2 py-1 text-white bg-black bg-opacity-75 transition-opacity opacity-0 group-hover:opacity-100">CATÁLOGO RAZONADO</p>
                        </a>
                    </div>
                
                    <div>
                        <img src={carasXul} alt="Descripción de la imagen" class="w-full h-[100px] mt-[65px]" />
                    </div>

                    <div>
                        <a href="https://www.xulsolar.org.ar/coleccion.html" class="relative group">
                            <img src={coleccionPermanente} alt="Descripción de la imagen"   class="w-full h-[200px] mt-[50px] object-cover transition-transform transform group-hover:scale-105"/>
                            <p class="absolute bottom-0 left-0 w-full px-2 py-1 text-white bg-black bg-opacity-75 transition-opacity opacity-0 group-hover:opacity-100">COLECCIÓN PERMANENTE</p>
                        </a>
                    </div>

                
                    <div>
                        <a href="https://www.xulsolar.org.ar/educacion.html" class="relative group">
                            <img src={educacion} alt="Descripción de la imagen"  class="w-full h-[180px] mt-[-1px] object-cover transition-transform transform group-hover:scale-105" />
                            <p class="absolute bottom-0 left-0 w-full px-2 py-1 text-white bg-black bg-opacity-75 transition-opacity opacity-0 group-hover:opacity-100">EDUCACIÓN</p>
                        </a>
                    </div>

                    
                    <div>
                        <a href="https://www.xulsolar.org.ar/museo.html" class="relative group">
                            <img src={elMuseo} alt="Descripción de la imagen"   class="w-full h-[300px] mt-[-228px] object-cover transition-transform transform group-hover:scale-105"/>
                            <p class="absolute bottom-0 left-0 w-full px-2 py-1 text-white bg-black bg-opacity-75 transition-opacity opacity-0 group-hover:opacity-100">EL MUSEO</p>
                        </a>
                    </div>
                    
                    <div>
                        <a href="https://www.xulsolar.org.ar/exposiciones.html" class="relative group">
                            <img src={exposiciones} alt="Descripción de la imagen"   class="w-full h-[300px] mt-[-215px] object-cover transition-transform transform group-hover:scale-105"/>
                            <p class="absolute bottom-0 left-0 w-full px-2 py-1 text-white bg-black bg-opacity-75 transition-opacity opacity-0 group-hover:opacity-100">EXPOSICIONES</p>
                        </a>
                    </div>

                
                    <div>
                        <a href="https://www.xulsolar.org.ar/testimonios.html" class="relative group">
                            <img src={testimonio} alt="Descripción de la imagen"   class="w-full h-[200px] mt-[-120px] object-cover transition-transform transform group-hover:scale-105"/>
                            <p class="absolute bottom-0 left-0 w-full px-2 py-1 text-white bg-black bg-opacity-75 transition-opacity opacity-0 group-hover:opacity-100">TESTIMONIO</p>
                        </a>    
                    </div>

                   
                

                </div>
            </div>

        </div>
       
    )

};

export default Destacados;




// import  bibliografia from '../../imagenes/destacados/bibliografia.png';
// import  biografiaXulSolar from '../../imagenes/destacados/biografiaXulSolar.png';
// import  catalogoRazonado from '../../imagenes/destacados/catalogoRazonado.png';
// import  coleccionPermanente from '../../imagenes/destacados/coleccionPermanente.png';
// import  educacion from '../../imagenes/destacados/educacion.png';
// import  elMuseo from '../../imagenes/destacados/elMuseo.png';
// import  exposiciones from '../../imagenes/destacados/exposiciones.png';
// import  testimonio from '../../imagenes/destacados/testimonio.png';

// const Destacados = () =>{
//     return(
//         <div class="grid grid-cols-4 gap-4" >

//             <a  href="https://www.xulsolar.org.ar/bibliografia.html" >
//                 <img src={bibliografia} alt="Descripción de la imagen" class="h-96" />
//                 <p>BIBLIOGRAFÍA</p>
//             </a>

//             <a href="https://www.xulsolar.org.ar/biografia.html" >
//                 <img src={biografiaXulSolar} alt="Descripción de la imagen"/>
//                 <p>BIOGRAFÍA XUL SOLAR</p>
//             </a>


//             <a href="https://www.xulsolar.org.ar/catalogo.html">
//                 <img src={catalogoRazonado} alt="Descripción de la imagen" class="h-60" />
//                 <p>CATÁLOGO RAZONADO</p>
//             </a>


//             <a href="https://www.xulsolar.org.ar/coleccion.html">
//                 <img src={coleccionPermanente} alt="Descripción de la imagen"/>
//                 <p>COLECCIÓN PERMANENTE</p>
//             </a>


//             <a href="https://www.xulsolar.org.ar/educacion.html">
//                 <img src={educacion} alt="Descripción de la imagen" class="h-72" />
//                 <p>EDUCACIÓN</p>
//             </a>


//             <a href="https://www.xulsolar.org.ar/museo.html">
//                 <img src={elMuseo} alt="Descripción de la imagen"/>
//                 <p>EL MUSEO</p>
//             </a>

//             <a href="https://www.xulsolar.org.ar/exposiciones.html">
//                 <img src={exposiciones} alt="Descripción de la imagen"/>
//                 <p>EXPOSICIONES</p>
//             </a>

//             <a href="https://www.xulsolar.org.ar/testimonios.html">
//                 <img src={testimonio} alt="Descripción de la imagen"/>
//                 <p>TESTIMONIO</p>
//             </a>


//         </div>
//     )

// };

// export default Destacados;