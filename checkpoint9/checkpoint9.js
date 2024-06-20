//iterating with Async/await task1
let stocks ={
    jordans : ['jordan1','jordan3','jordan4'],
    others : ['New-Balance', 'sb-dunk', 'air-max', 'air-force1'],
};

let is_shop_open = true;
 let order =(time,work) => {
    return new Promise((resolve, reject) => {
    if (is_shop_open) {
        setTimeout(() => {
            resolve(work());
        },time);    
    }else {
        reject (console.log('shop is closed'));
    }
    });
 };

 order(2000, () => console.log(`${stocks.jordans[2]} was picked`))


 .then (() =>{
 return order(3000, () => console.log("production has started"));
 })


//async/await api function task2
async function fetchUsers() {
    const res = await fetch 
    ('https://jsonplaceholder.typicode.com/users');

    const data = await res.json();

    console.log(data);
}

fetchUsers();
//function to catch error when Api call fails 3a
const error = false;

     if(!error){
    resolve();
   }else {
 reject ('error: something went wrong');
} 
//chaining function 3b
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function asyncFunction1() {
  await delay(1000);
  console.log('Message from asyncFunction1 after 1 second');
}

async function asyncFunction2() {
  await delay(2000);
  console.log('Message from asyncFunction2 after 1 second');
}

async function asyncFunction3() {
  await delay(3000);
  console.log('Message from asyncFunction3 after 1 second');
}


// invoking the chained function task4
chainedAsyncFunctions();async function concurrentRequests() {
    // Define the URLs for the API calls
    const url1 = 'https://api.example.com/data1';
    const url2 = 'https://api.example.com/data2';

    try {
        // Make the API calls concurrently using Promise.all
        const [response1, response2] = await Promise.all([
            fetch(url1),
            fetch(url2)
        ]);

        // Check if both responses are OK
        if (!response1.ok || !response2.ok) {
            throw new Error('HTTP error! status');
        }

        // Parse the responses as JSON
        const data1 = await response1.json();
        const data2 = await response2.json();

        // Combine the results
        const combinedResults = { data1, data2 };

        //console logging the results 
        console.log('Combined Results:', combinedResults);
        //catching errors 
    } catch (error) {
        // Handle any errors that occur during the fetch or JSON parsing
        console.error('Error during API calls:', error);
    }
}

// invoking the function 
concurrentRequests();

//function to complete concurrent request


