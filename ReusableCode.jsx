/* HOW TO PLAN AND BUILD A REACT  APP
1. Gather application requirements and features
2. Divide the application into pages
    - think about the overall and page level UI
    - Break the desired UI into components 
    - Design and build a static version (no state)
3. Divide the application in the feature categories
    - Think about state management + data flow
4. Decide what libraries to use (technology decisions)

*/



//dynamically build a numeric array
<select>
{Array.from({length:20}, (_, i) => i + 1).map
((num) => (
  <option value={num} key={num}>{num}</option>
))}
</select>

const ratingCirclesArray =  [...Array(4)]
  .map((_,i) => 
    <span key={i} className={cn('block w-2.5 h-2.5 rounded-full text-xs', i < ratingNumber ? bgColour[cqcRating].value : 'bg-iron')}></span>
  )

//get current date and add days to it
let date = new Date("21 July 2023")
date.setDate(date.getDate() + count)
today is:{date.toDateString()}

// ----------------------------------------------------------------
  const [dates, setDates] = useState<{date: string, isEven: boolean}[]>([])
  const [dateSelected, setDateSelected] = useState<string>('')

  useEffect(() => {
    setDates([])
    getDaysFromTodayArray(dateRange)
  },[dateRange])


const getDaysFromTodayArray = (action: number) => {
  const today = new Date();
  let i = 0;
  while (i < action){
      today.setDate(today.getDate() + 1)
      const nextDate = today.toISOString().slice(0,10)
      setDates(dates => [...dates, nextDate])
      i ++
  };
};

  return (
    <div>
      <p>Date Selected: {dateSelected}</p>
      <div className='flex gap-2 p-1 rounded border border-blue-700 flex-wrap'>

        {dates.map((date) => 
        <>
          {date.date.startsWith('01') ? (<p>the firsts</p>) : ''}
          <button 
            key={date.date} 
            onClick={() => setDateSelected(date.date)}
            className={`p-1 rounded border border-blue-700 hover:bg-blue-100 active:border-red ${date.isEven ? 'bg-blue-300' : 'bg-rose-500'}`}
          >
            {date.date}
          </button>
        </>
        )}
      </div>
    </div>
  )

//------------------------------------------------------------------------------------




//map a json object, destructure object
<ul className='pizzas'>{pizzaData.map(pizza => 
    <Pizza pizzaObj={pizza} /> )}
  </ul>

function Pizza({ pizzaObj }) {}


//fetch API data
const response = await fetch("https://api.adviceslip.com/advice");
const data = await response.json() 

//capture input in STATE -- Controlled element
const [description, setDescription] = useState("")

<input 
type='text' 
placeholder='Item...' 
value={description} 
onChange={(e) => setDescription(e.target.value)}
/>

//map array, update array item (array is titled 'Item') spread the array
function handleCheckedItems(id) {
  setItems((items) => items.map(item => item.id === id ? {...item, packed: !item.packed } : item ))
}

//create new array and then order array alphabetically
if (sortBy === "description")
sortedItems = items.slice().sort((a,b) => a.description.localeCompare(b.description))

//conditional within the return( ) "if bill is more than 0 do this"
{ bill > 0 && (
  <>
   <h1>You Pay: £{bill + tip} :  £{tip} is the tip amount </h1>
  <button onClick={handleReset}>Reset</button>
  </>
  )}

  //toggle boolean state
   const [isTrue, setIsTrue] = useState(true)
   setIsTrue(!isTrue)

  //pass props down the Tree, pass functions up the tree

  //-------------------------------------------------------------------------------
  // in the second Component, there are no props. 
  //So within the function, default values are provided, this allows reusability 
  //and customisation of a component

  export default function App() {
  return (
    <div>
        <TextExpander
        collapsedNumWords={20}
        expandButtonText="Show text"
        collapseButtonText="Collapse text"
        buttonColor="#ff6622"
      >
        Lorem ipsom
      </TextExpander>

      <TextExpander>
        Lorem ipsom
      </TextExpander>
    </div>

  );
}

function TextExpander({ 
      children, 
      collapsedNumWords = 150, 
      buttonColor = '#72c736', 
      expandButtonText = 'Show More',
      collapseButtonText = 'Show Less',
    }) 

    //------------------------------------------------------------------------

    //***** In cases where you need to "reset state",
    //give the element a 'key' and this changes across renders *****

//Setting State based on a function as opposed to a simple value
// ** Known as CALLBACK Function ****
const [count, setCount] = useState(() => localStorage.getItem('counters'))

//updating state based on current state
const [count, setCount] = useState((c) => c + 1)

//-------------------------------------------------------------------
//useRef -- 
// - holds a value through re-renders, 
// - doesnt reset it's value
// - doesn't trigger a render when the value is updated in a useEffect
// use can find the current value with '.current':
const countRef = useRef(0);
const refValue = useRef([])

useEffect(
  function () {
    if (userRating) {
      countRef.current++;
      refValue.current = [...refValue.current, userRating]
    } 
  },
  [userRating]
);
console.log(countRef, refValue)
// you could present the results in an object or log them without displaying them in the dom

//useReducer
// the current state and a dispatch function are returned when useReducer is called
//and the hook takes in a function know as a reducer function and an initial state
// the reducer function specifies HOW the state gets updated via the 'action' parameter passed into the function
const [currentState, dispatch] = useReducer(reducer, initialState)
// the currentState is an object that can be destructured


//--------------------Context API---------------------------
//In cases where several functions use the same props or  in cases where you
//have to prop drill to access props, you can create a Context API
//as the name suggests it passes in specific context to a function
//1. create the specific context to passinto the API
import { Component, createContext, useEffect, useState } from "react";
const PostContext = createContext()

//2. put the information that would usually be passed down as props such as 
//useState hooks and functions all into one function
function PostProvider({children}) {
  const [searchQuery, setSearchQuery] = useState("");
  const [posts, setPosts] = useState("a random post")

  function handleClearPosts() {
    setPosts([]);
  }

  //3. in the retun pass in all the props
  return(
    <PostContext.Provider value={{
        posts: searchedPosts, 
        onClearPosts: handleClearPosts, 
        onAddPost: handleAddPost,
        searchQuery: searchQuery,
        setSearchQuery: setSearchQuery,
      }}>
        {children}
    </PostContext.Provider>
  )
}

//4. in the top level function App  in the retun wrap all the components that need access to the data in 
  // a .Provider with the props as the values
  // the children being the components
  function App() {
    return (
      <PostProvider>
      <Header />
      <Main />
      <Archive />
      <Footer />
    </PostProvider>
    )
  }
  //----------------------------------------------------------------------

// most popular 3rd party application for Single Page applications "react-router-dom"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// see worldwise app for details 
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="product" element={<Product />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="app" element={<AppLayout />}>
            // nested links within Applayout 
            <Route index element={<Navigate replace to='cities' />} />
            <Route path="cities/:id" element={< City />} />
            <Route path="cities" element={<CityList cities={cities}/>}/>>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>


  )
}
import { memo, useMemo, useCallback } from "react"
<Archive someVariable={someVariable} />
//when you have a slow rendering function that receives props you can speed up the application
//by wrapping the function in a memo, if the value of the props dont change then the 
//outcome will always be the same meaning it desont need to rerender each time
const Archive = memo (function Archive({someVariable}) {
  // the received value into the 'someVariable' prop does not change
  //*big slow rendering function is placed in the function here*
}
)

<Archive someObject={someObject} someFunction={someFunction} />
//The Archive component contains a slow returing function which can slow down our application
//in the above 'memo' hook we were able to cache the result and just return the result instead of
//rerendering the function.
//However, if the prop is an object every time the 'Archive' component is called it'll 
//see the object prop as NEW props and rerender the component. In order to stop that the
// obejct/functions need to be made stable via useMeno or useCallback

const someObject = useMemo (() => {
  return {
    show: true,
    title: "some random title"
  }
},[])
// contains a callback dependancy array function similar to useEffect. The function is called on initial render
// with the result stored in the cache and stored during rerenders.

const someObject2 = useMemo (() => {
  return {
    show: true,
    title: `some random title ${thisName}`
  }
},[thisName])
//If you are passing in a prop which could change overtime then you'd add that prop to the dependancy
//array to tell react to rerender when the prop changes

const someFunction = useCallback(function someFunction(post) {
  setPosts((posts) => [post, ...posts])

},[])

  // **********************useMemo memorises the result of calling the callback
  // useCallback on the function itself is memorised ***************************************

  // ############################LAZY LOADING####################################

  import { lazy, Suspense } from "react";

//splitting the application up into individual pages and then lazyloading in each page
//when bundling up an applicationm to place on a server the whole application is bundled
//in one big file. the whole file is sent.
// For quicker and for optmisation you can split the bundle using lazy loading
const Homepage = lazy(() => import ("./pages/Homepage"));
const Product = lazy(() => import ("./pages/Product"));
const Pricing = lazy(() => import ("./pages/Pricing"));

//import Homepage from "./pages/Homepage";
//import Product from "./pages/product";
//import Pricing from "./pages/Pricing";

// ********************** Mechanics of Redux ************************************
// Event Handler Component --> Action Creator Function --> Dispatch --> Store --> Next State --> Re-render
 // In a bank scenario the customer is the action creator and the function would be to pay money into my account.
 // bank teller is the dispatch as they actually handle the transaction
 // bank safe is the store as the  money is put into the correct account
 // the transaction is recorded and my new balance would be the re-reneder showing new amount

 //Like context API all the states are wrapped around the components and passed in as a value
 import { Provider } from 'react-redux';
 import { useDispatch, useSelector } from "react-redux";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // all states are stoerd in the store object
  <Provider store={store}>
  <App />
</Provider>
);

 const dispatch = useDispatch()
 const { 
   balance: currentBalance, 
   loan: currentLoan, 
   loanPurpose: currentLoanPurpose 
 } = useSelector((store => store.account))

 function handleDeposit() {
   if (!depositAmount) return;
   dispatch(deposit(depositAmount))
   setDepositAmount("")
 }

 //useSelector selects the state in which you need to work with
 // useDispatch is the action/event you which to carry out

 // *********************Redux Toolkit *******************************
 //Only accepts one paramenter for payload

//  Client side. async await to get API data,
//  .then is the promise once the data is received and storing it in a variable “serviceCenters”
//  Creating a new const to map over the variable and store it in a new array which returns a
//  specific object structure.
//  Passing result to useState function
const getServiceCentres = async () => {
    await builder.getAll("service-centers", {}).then((serviceCenters) => {
      const scentre = serviceCenters.map((sc) => {
        return {
        text: sc?.data?.serviceCentre,
        value: sc?.data?.serviceCentre,
        };
      });
    scentre.unshift({ text: "All", value: "All" });
    setServiceCenterDropDown(scentre);
  });
};

//FILTERS - Custom object
const customFields = this.context.product.custom_fields.filter(field => field.name === "IntroOffer" || field.name === "custom_badge")
  .map(field => ({
  name: field.name,
  value: field.value,
  })
);
//-----------------

const ratingCirles = (ratingNumber: number = 0) => {
  const cqcRatingData =  clinicRatingMetrics.ratingDescription
    .filter((rating) => rating.score === ratingNumber)
    .map(rating => ({
      theRating: rating.rating,
      theLabel: rating.label})
    );

  const cqcRating = cqcRatingData[0].theRating as CQCRatingTypes

  //create an array of length 4. populate the array by mapping it
  const ratingCirclesArray =  [...Array(4)]
    .map((_,i) => 
      <span key={i} className={cn('block w-2.5 h-2.5 rounded-full text-xs', i < ratingNumber ? bgColour[cqcRating].value : 'bg-iron')}></span>
    )
  return (
    <>
      <p className='text-charcoal text-sm mr-1'>{cqcRatingData[0].theLabel}</p>
      {ratingCirclesArray}
    </>
  )  
}

// Sorting data into numerical order 
const toSort = () => {
  await someData.then((res) => {
    const sorted = res.sort((a: any, b: any) => {
    const indexA = serviceCenter.findIndex(
    (sc: any) => sc.selectServiceCenter?.id === a.id,
    );
    const indexB = serviceCenter.findIndex(
    (sc: any) => sc.selectServiceCenter?.id === b.id,
    );
    if (indexA < indexB) return -1;
    if (indexA > indexB) return 1;
    return 0;
  });
  setServiceCentreData(sorted);
})
}

// Filtering data , going through each line of the array, if any line fulfils the credential of the
// “.some” add it to the filtered list.
{
  representatives.filter((rep: RepresentativesProps) => 
    rep.data.serviceCentres.some((servCentre) =>
    servCentre.serviceCentre ===
    serviceCenterOption,
    ),
)
}

// Removing an item from a useState array.
// Perform filter and return results to the updatedArray
//typescript of type UserData
const [usersArray, setUsersArray] = useState(users);
const handleRemoveItem = (selectedUser: UserData): void => {
  setUsersArray((updatedArray) =>
    updatedArray.filter((eachUser) => eachUser.email !==
    selectedUser.email),
    );
};

// Destructure an object, filter on names and then run checks
// ourCustomValues == accumulator
//field == current field value
// .reduce(acc, cur, idx, arr) => {}
const {introOffer,customBadge} = 
this.context.product.custom_fields.reduce((ourCustomValues,field)=> {
  if(field.name === "IntroOffer"){
    return {
    ...ourCustomValues,
    introOffer: field.value
    }
  }
  if(field.name === "custom_badge"){
    return {
    ...ourCustomValues,
    customBadge:field.value
    }
  }
  return ourCustomValues;
//initial values
},{introOffer:null, customBadge: null})

//Some - when you need to check if at least one element meets a condition and a boolean result (true or false) is sufficient
// then .map over that new array creating new named object
const treatmentClinics = clinicsData.clinic
  .filter((c) => c.procedures
    ?.some((p) => p.procedureSlug === treatment))
  ?.map((c) => {
    return{ 
      treatmentClinic: c, 
      procedure: c.procedures.filter((p) => p.procedureSlug === treatment)
    }
  })

// Modern switch statement for typescript is a type Record
// Call function, passing in the parameter, which calls another function with the possible return
// strings.
const notifcationMessages: Record<string, string> = {
"add" : t("notification.userAdded"),
"update" : t("notification.userUpdated"),
"remove" : t("notification.userRemoved")
}
const getNotificationMessage = (action : string) : string => {
return notifcationMessages[action];
}
// In the main body of the return ()
{getNotificationMessage(showNotification.action)}


//Mutation Observer
const observer = new MutationObserver(() => {
  const sizeselctor = document.querySelector('.SizeSelector_extendedWrapper__1aNbp');
  const a4size = sizeselctor.firstChild;
  console.log('a4', a4size)
  a4size.classList.add('selected');
  observer.disconnect();
});

const url = new URL(location.href)
url.searchParam.set('sizeId', 8)
console.log(url)
const defaultSize = document.querySelector('#size-selection-8'); 
const wrapper = document.querySelector('.SizeSelector_extendedWrapper__1aNbp'); 
document.addEventListener('scroll', () => {
  
  
	if(!wrapper.classList.contains("size-default-set")) {
		wrapper.classList.add("size-default-set")
    console.log('hit')
		defaultSize.click();  
	 }
})


// call `observe()`, passing it the element to observe, and the options object
observer.observe(document.querySelector("#layout-wrapper"), {
  subtree: true,
  childList: true,
});

//Split in a structured array
  if (paymentStartDate) {
    const [year, month, day] = nextMonthDateStr.split('-');
    paymentStartDateFormatted = `${year}-${month}-${paymentStartDate}`;
  }

//----------------------------------------------------------------
//recounting to 5 repeatedly
   const [bgGradientNumber, setBgGradientNumber] = useState(1);

useEffect(() => {
    const imageTimer = setInterval(() => {
      setBgGradientNumber((prev) => {
        if (prev >= 5) {
          return 1; // reset to 1
        }
        return prev + 1; // increment
      });
    }, 5000);
    return () => {clearInterval(imageTimer)} ; // cleanup on unmount
  }, []);

//  ----------------------------------------
// mapping a very nested JSON to filter the data where a clinic does a procedure

  const { treatment } = await params
  // can use useMemo() if used inside a client component 
  // const treatmentClinics = useMemo(() => clinicsData.clinic.flatMap....
  const treatmentClinics = clinicsData.clinic.flatMap(clinic =>
  clinic.locations
    .filter(location =>
      location.procedures.some(p => p.procedureSlug === treatment)
    )
    .map(location => ({
      treatmentClinic: location.name,
      procedures: location.procedures.filter(
        p => p.procedureSlug === treatment
      )
    }))
  );

  const procedure = procedures?.filter((proc) => proc.procedureSlug === treatmentSlug )
  .map((p) => ({
    price: p.price, 
    name:p.procedure
  }))

  locationProcedures.flatMap((p) => p?.some((s) => s.isSurgical)).includes(true)

  //using flatMap twice because the JSON is an array of arrays
  const allTreatments= treatmentClinics.flatMap((loc) => loc.locations
  .flatMap((p : LocationsProps) => p.procedures?.filter((p) => p.procedureSlug === treatmentSlug)
    .map((p) => ({
      procedure: p.procedure, 
      price: p.price
    }))
  ))

//   If you ever see
// map().filter().map()
// and get weird empty results → you probably want flatMap()

//dispatchEvent() is what notifies the rest of the app that the value changed
// - Updates the value
// - Triggers event listeners
// - Mimics real user typing
// Notifies:
// - addEventListener("input", ...)
// - Framework state bindings
// - Validation logic
// - Form libraries 

const input = document.querySelector('input[formcontrolname="numberOfBedrooms"]');
input.value = '3';
input.dispatchEvent(new Event('input', { bubbles: true }))


//refire event until variable exists

function showValidationMessage(show) {
  if(!document.querySelector('.tile-validation-message') && !document.querySelector('.cover-type-title')) {
    setTimeout(() => showValidationMessage(show),100);
    return;
  }
  document.querySelector('.tile-validation-message').style.display = show ? 'block' : 'none';
  document.querySelector('.cover-type-title').classList.toggle('error', show);
  document.querySelector('.cover-type-title').classList.toggle('default', !show);
}


// destructure contacts object to just pick out the address, rename address to be addr.
//using .some returns a boolean. Is the addr.line1 in the address.line1 
const hasMatchingAddress = contacts.some(({ address: addr }) => {
  if (!addr) return false;

  return (
    addr.line1?.includes(address.line1) &&
    addr.postcode?.includes(address.postcode)
  );
});

//Version	Checks
!== null	//Only excludes null
!= null	//Excludes null and undefined (often safer)

//Instead of using a 3,4 way ternary, use a Record instead
const widthMap: Record<string, string> = {
  full: "max-w-full",
  lg: "max-w-screen-lg",
  xl: "max-w-screen-xl",
  sm: "md:max-w-[350px]",
};

//none of the options match, then return md:max-w-screen-md
const dialogWidth = widthMap[width] ?? "md:max-w-screen-md"

//instead of writing
condition ? condition : fallback

//it can be refactored to be
condition || fallback
// If the condition is truthy, it will be returned.
// Otherwise, it falls back to the fallback

// Your TypeScript interface is now outdated for Next.js 15+ / 16.
// You typed params as a synchronous object:

interface PageProps {
  params: {
    page: string[];
  };
}

// But in Next.js 16: params is actually a Promise So at runtime, this is happening:
props.params // 👉 Promise<{ page: string[] }>

// Which is why Next complains when you access:

props?.params?.page // ❌ accessing before await

interface PageProps {
  params: Promise<{
    page: string[];
  }>;
}

export default async function Page(props: PageProps) {
  const { page } = await props.params;
}

// In Next.js 15+, always assume route data is async:
// 🧠 Quick mental model going forward (Next 15/16)
// Any time you're in the App Router, assume these are async:

** params ** 
** searchParams ** 
** headers() ** 
** cookies() ** 

// 👉 Default instinct now:
// const data = await something;
// ⚡ Pro tip (will save you time later)
// If you ever see errors like:

"must be unwrapped with await or React.use()"
"is a Promise"

// → immediately suspect async route data
// params
// searchParams

//---------------------------------------------------------------------

// In suitations where you want to cast a type but the response could be null
// Type '(IWishlistItem | null)[]' is not assignable to type 'IWishlistItem[]'.

// You can create a typeguard to filter out any instance of null to ensure the type.
// in the first instance mapping over each item could return an empty value or null, so after it's mapped, filter where the item is !== null

const wlproducts = (
  await Promise.all(
    responseIds.map((item) => getWishListItemProduct(item))
  )
).filter((item): item is IWishlistItem => item !== null);