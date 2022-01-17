//an exercise to demonstrate the core princples of redux
const initialWagonState={
  supplies : 100,
distance :0,
days :0,
cash:200
};

const reducer=(state=initialWagonState,action)=>{
 //sell -Players can give away 20 supplies to gain 5 cash
 //buy - players can buy 25 supplies for 15 cash
 const {cash,supplies,days,distance}=state;
switch (action.type){
  case 'theft':
  return {...state,cash:(cash/2)};
  case 'buy':
  return {...state,
  supplies:supplies+(25*(action.payload/15)),cash:cash-(action.payload)
  };
  case 'sell':
  return {...state,supplies:supplies-action.payload,cash:cash+((action.payload/20)*5)};
  case 'gather':
  return {...state,days:days+1,
  supplies:supplies+15};
  case 'travel':{
  const suppliesNeeded=20*action.payload;
  if(supplies<suppliesNeeded)return state;
  return {...state,supplies:supplies-(suppliesNeeded),distance:distance+(action.payload*10),
  days:days+action.payload}}
  case 'tippedWagon':
  return {...state,days:days+1,
  supplies:supplies-30
  };
  default:
  return state
}
}
let wagon;
console.log(wagon=reducer(undefined,{}))
console.log(wagon=reducer(wagon,{type: 'travel', payload: 1}));
console.log(wagon=reducer(wagon,{type:'gather'}));
console.log(wagon=reducer(wagon,{type:'tippedWagon'}));
console.log(wagon=reducer(wagon,{type:'travel',payload:3}));
