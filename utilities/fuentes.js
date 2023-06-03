import {Poppins, Mrs_Saint_Delafield} from 'next/font/google'

  const saintDelafield=Mrs_Saint_Delafield({
    subsets:['latin'],
    weight:'400'
  })
  const poppinsBold=Poppins({
    subsets:['latin'],
    weight:'900'
  })
  const poppinsMidBold=Poppins({
    subsets:['latin'],
    weight:'600'
  })
  const poppins=Poppins({
    subsets:['latin'],
    weight:'400'
  })

export default function myFonts(tipoFuente){
  switch (tipoFuente) {
    case 'bold':
      return poppinsBold
      break;
    case 'midBold':
      return poppinsMidBold
      break;
    case 'normal':
      return poppins
      break;
    case 'normalSaint':
      return saintDelafield
      break;
    default:
      console.log(`Lo siento ese tipo de fuente no se encuentra ${tipoFuente}.`);
  }
}