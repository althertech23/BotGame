const puppeteer = require('puppeteer');
var negativo = 0;
var positivo = 2;
var timer = 0;

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    userDataDir: './cache'
});
  const page = await browser.newPage();
  await page.setViewport({ width: 1366, height: 768});
  await page.goto('https://blaze.com/en/games/crash');

  const variaveis = await page.evaluate(async () => {
    return await new Promise(resolve => {

      resolve('a');
    }
  )});

 const seGanhar = 2;
 const SePerder = 3;
 console.log(variaveis);




 setInterval(async function () {
  const variaveis2 = await page.evaluate(async () => {
    return  new Promise(resolve => {

      var sequenciaPositiva = 0;
      var sequenciaNegativa = 0;

      maria = document.querySelector (".entries span:nth-child(10)").className;
      maria2 = document.querySelector (".entries span:nth-child(9)").className;
      maria3 = document.querySelector (".entries span:nth-child(8)").className;
      maria4 = document.querySelector (".entries span:nth-child(7)").className;
      maria5 = document.querySelector (".entries span:nth-child(6)").className;
      maria6 = document.querySelector (".entries span:nth-child(5)").className;
      maria7 = document.querySelector (".entries span:nth-child(4)").className;
      maria8 = document.querySelector (".entries span:nth-child(3)").className;
      maria9 = document.querySelector (".entries span:nth-child(2)").className;
      maria10 = document.querySelector (".entries span:nth-child(1)").className;

      if ( maria == 'good' ) {
      sequenciaPositiva = sequenciaPositiva + 1;
      sequenciaNegativa = 0;  }     
      if ( maria == 'bad' ) {
      sequenciaPositiva = 0;
      sequenciaNegativa = sequenciaNegativa + 1; }     
      if (maria2 == 'good'){
      sequenciaPositiva = sequenciaPositiva + 1;
      sequenciaNegativa = 0;  }        
      if (maria2 == 'bad') {
      sequenciaPositiva = 0;
      sequenciaNegativa = sequenciaNegativa + 1; }
      if (maria3 == 'good'){
      sequenciaPositiva = sequenciaPositiva + 1;
      sequenciaNegativa = 0;  }          
      if (maria3 == 'bad') {
      sequenciaPositiva = 0;
      sequenciaNegativa = sequenciaNegativa + 1; }     
      if (maria4 == 'good'){
      sequenciaPositiva = sequenciaPositiva + 1;
      sequenciaNegativa = 0; }            
      if (maria4 == 'bad') {
      sequenciaPositiva = 0;
      sequenciaNegativa = sequenciaNegativa + 1;  }       
      if (maria5 == 'good'){
      sequenciaPositiva = sequenciaPositiva + 1;
      sequenciaNegativa = 0; }
      if (maria5 == 'bad') {
      sequenciaPositiva = 0;
      sequenciaNegativa = sequenciaNegativa + 1; }
      if (maria6 == 'good'){
      sequenciaPositiva = sequenciaPositiva + 1;
      sequenciaNegativa = 0; }
      if (maria6 == 'bad') {
      sequenciaPositiva = 0;
      sequenciaNegativa = sequenciaNegativa + 1; }
      if (maria7 == 'good'){
      sequenciaPositiva = sequenciaPositiva + 1;
      sequenciaNegativa = 0; }             
      if (maria7 == 'bad') {
      sequenciaPositiva = 0;1
      sequenciaNegativa = sequenciaNegativa + 1; }
      if (maria8 == 'good'){
      sequenciaPositiva = sequenciaPositiva + 1;
      sequenciaNegativa = 0; }
      if (maria8 == 'bad') {
      sequenciaPositiva = 0;
      sequenciaNegativa = sequenciaNegativa + 1; }
      if (maria9 == 'good'){
      sequenciaPositiva = sequenciaPositiva + 1;
      sequenciaNegativa = 0; }
      if (maria9 == 'bad') {
      sequenciaPositiva = 0;
      sequenciaNegativa = sequenciaNegativa + 1; }
      if (maria10 == 'good'){
      sequenciaPositiva = sequenciaPositiva + 1;
      sequenciaNegativa = 0;}
      if (maria10 == 'bad') {
      sequenciaPositiva = 0;
      sequenciaNegativa = sequenciaNegativa + 1; }
                           
      ref1 = document.querySelector (".crash-previous").querySelectorAll ("span")[0].innerText;
  
      resolve([ref1, sequenciaPositiva, sequenciaNegativa]);
    }
  )});

  async function ultima() {

    console.log('!!!!!!!!!!!!!!!!!!!!!!!!!');
      
    }








  console.log(variaveis2);
  if (variaveis2 == '1.00X'){
console.log('baixaMaxima');
}



if (variaveis2[2] == negativo) {
  console.log('perdeu', negativo);
  timer = timer + 1;
 
  console.log(timer);

}
if (timer == 4) { 
  
  await page.type('[class="input-field"]', '0.20');
  await page.type('[data-testid="auto-cashout"]', '1.50');
}
  if (timer == 5) {
  await page.click('.place-bet button');
  }
  
 

if (timer == 62) { timer = 0; }

if (variaveis2[2] == positivo) {
  console.log('Ganhou', positivo);
 
 

 


}


 }, 2000 );


 
})(); 









