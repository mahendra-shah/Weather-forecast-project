const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');
const city_name = document.getElementById('city_name');

const temp_real_value = document.getElementById('temp_real_value'); // show dgree celsius symble
const temp_status = document.getElementById('temp_status'); // show icon - sun, cloud, rain

const datahide = document.querySelector('.main_layer')  // hide data here

const getInfo = async(Event)=>{
    Event.preventDefault();
    let cityVal = cityName.value;
    if(cityVal ===""){
        city_name.innerText = `please write the name before search`;
        datahide.classList.add('data_hide') // hide data here
    }
    else{
        try{
            let url =`https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=f06a0869b16dcd6773047b6186f111ee`
            const responce = await fetch(url);
            const data = await responce.json();
            const arrdata = [data]
            
            city_name.innerText = `${arrdata[0].name}, ${arrdata[0].sys.country}`;
            temp_real_value.innerText = arrdata[0].main.temp;


            const tempMood = arrdata[0].weather[0].main;
            if (tempMood==='Clear'){
                temp_status.innerHTML = 
                "<i class='fas fa-sun'  style='color:#eccc68;'></i>";
            }
            else if(tempMood==='Clouds'){
                temp_status.innerHTML = 
                "<i class='fas fa-cloud'  style='color:#f1f2f6;'></i>";
            }
            else if(tempMood==='Rain'){
                temp_status.innerHTML = 
                "<i class='fas fa-rain'  style='color:#a4b0be;'></i>";
            }
            else{
                temp_status.innerHTML = 
                "<i class='fas fa-sun'  style='color:#eccc68;'></i>"
            }
            datahide.classList.remove ('data_hide') // hide data here
        }
        catch{
            city_name.innerText = `please Enter city name properly`;
            datahide.classList.add('data_hide') // hide dat here     

        }
    }

}
submitBtn.addEventListener('click',getInfo)