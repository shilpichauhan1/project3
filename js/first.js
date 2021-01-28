const APIURL="https://corona.lmao.ninja/v2/countries/india";
async function getRecords(url){
    const response = await fetch(url);
    const resData=await response.json();
    showRecords(resData);
    //console.log(resData);
}
getRecords(APIURL);
function showRecords(record){
    //console.log(record);
    document.getElementById("main").innerHTML=
    `
    
    <h3>CASES</h3>
    <div>
    <h5>Total number of cases in India</h5>
    <div>${record.cases}</div>
    </div>
    <div>
    <h5>Total number of cases per one million in India</h5>
    <div>${record.casesPerOneMillion}</div>
    </div>
    <div>
    <h5>Todaycases in India</h5>
    <div>${record.todayCases}</div>
    </div>
    <h3>DEATHS</h3>
    <div>
    <h5>Total number of deaths in India</h5>
    <div>${record.deaths}</div>
    </div>
    <div>
    <h5>Total number of deaths per one million in India</h5>
    <div>${record.deathsPerOneMillion}</div>
    </div>
    <div>
    <h5>Todaydeaths in India</h5>
    <div>${record.todaydeaths}</div>
    </div>
    <h3>RECOVERED</h3>
    <div>
    <h5>Total number of recovered in India</h5>
    <div>${record.recovered}</div>
    </div>
    <div>
    <h5>Total number of recovered per one million in India</h5>
    <div>${record.recoveredPerOneMillion}</div>
    </div>
    <div>
    <h5>Todayrecovered in India</h5>
    <div>${record.todayrecovered}</div>
    </div>
    <h3>TESTS</h3>
    <div>
    <h5>Total number of recovered in India</h5>
    <div>${record.tests}</div>
    </div>
    <div>
    <h5>Total number of tests per one million in India</h5>
    <div>${record.testsPerOneMillion}</div>
    </div>
    <div>
    <h5>one test per million in India</h5>
    <div>${record.oneTestPerPeople}</div>
    </div>
    `

}