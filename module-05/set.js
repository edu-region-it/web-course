function Set() {    
    this.datastore = [];
    this.add = add;
    this.find = find;
    this.remove = remove;
    this.traverse = traverse;
    this.count = count;
    this.clear = clear;
    this.dataFromArray= dataFromArray;
    this.union  = union;   
    this.intersection= intersection;
    this.difference= difference;
    this.subset= subset;
}

function add(key)
{
  if (this.datastore.indexOf(key)<0) 
    this.datastore.push(key);
}

function find(key)
{
  var index=this.datastore.indexOf(key);
  if (index<0) 
    return undefined;
  else
    return this.datastore[index];
}

function remove(key)
{
  var index=this.datastore.indexOf(key);
  if (index<0) 
    return false;
  else
    {
      this.datastore.splice(index,1);
      return true;
    }    
}

function traverse(action)
{
  this.datastore.forEach(action);
}


function count()
{
  return this.datastore.length;
}

function clear()
{
  this.datastore = []; 
}

function dataFromArray(arr)
{
  var tmp=new Set();
  tmp.datastore=[].concat(arr);  
  return tmp;
}
function union(otherSet)
{
//   var tmp=[].concat(this.datastore);  
//   for (var index=0;index<otherSet.datastore.length;index++)
//     {      
//       if (this.datastore.indexOf(otherSet.datastore[index])<0)
//         {          
//           tmp.push(otherSet.datastore[index]);       
//         }       
//     }  
//   return this.dataFromArray(tmp);
  var newSet = new Set();
  var index;
  for (index=0;index<this.datastore.length;index++)
     newSet.add(this.datastore[index]);
  for (index=0;index<otherSet.datastore.length;index++)
    newSet.add(otherSet.datastore[index]);
  return newSet;
}

function intersection(otherSet)
{  
  var tmp=[];  
  for (var index=0;index<otherSet.datastore.length;index++)
    {
      if (this.datastore.indexOf(otherSet.datastore[index])>-1)
       tmp.push(otherSet.datastore[index]);       
    }  
  return this.dataFromArray(tmp);
}

function difference(otherSet)
{  
  var tmp=[];
  for (var index=0;index<this.datastore.length;index++)
    {
      if (otherSet.datastore.indexOf(this.datastore[index])<0)
       tmp.push(this.datastore[index]);       
    }
  return this.dataFromArray(tmp);
}

function subset(otherSet)
{  
  for(var index=0;index<otherSet.datastore.length;index++)
    {
      if (this.datastore.indexOf(otherSet.datastore[index])<0)
        return false;
    }    
  return true;
}
  

var demoA = new Set();
var demoB = new Set();
demoA.add(1);
demoA.add(2);
demoA.add(3);

demoB.add(2);
demoB.add(5);
demoB.add(6);

var demoC = demoA.union(demoB);
console.log(demoC.datastore);