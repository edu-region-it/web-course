function HashPair(key,value)
{
  this.key=key;
  this.value = value;
}

function HashTable(tableSize) {
  this.datastore = [];
  this.tableSize = tableSize;
  this.add = function (key,value)
  {
    var index=this.hashFunction(key);    
    if (this.datastore[index] !== undefined){              
      while (this.datastore[++index]!==undefined)
        {          
          if (index>=this.tableSize) return false;
        }
    }    
    this.datastore[index] = new HashPair(key,value);
    return true;
  }

  this.find = function(key)
  {
    var index=this.hashFunction(key);    
    if (this.datastore[index] === undefined){
      return undefined;      
    }        
    if (this.datastore[index].key !== key){              
      while (this.datastore[index++]!==undefined)
        {
          if (index>=this.tableSize) return undefined;          
          if (this.datastore[index].key===key) break;
        }      
    }
    return this.datastore[index];
  }

  this.remove = function (key)
  {
    var index=this.hashFunction(key);
    if (this.datastore[index] === undefined){
      return undefined;      
    }     
    this.datastore[index].remove(key);
  }
  this.showByHash=function (index) 
  {
    if (this.datastore[index] !== undefined){      
        console.log(this.datastore[index]);
      }    
  }
  
  this.hashFunction = function (key)
  {
     var hash = key.charCodeAt(0); 
    //A - 65 J - 75
//     for (var i = 0; i < key.length; i++) {
//               hash += key.charCodeAt(i);
//     }   
    return hash % this.tableSize;
  }
  
  this.traverse = function (action){
    for (var ind=0; ind<this.datastore.length; ind++)
      {
         if (this.datastore[ind]!== undefined)
           action(this.datastore[ind]);
      }
  }
  this.count = function (){
    var cnt=0;
    this.traverse(function(){cnt++;});  
    return cnt;
  }
}


var hash= new HashTable(10);
hash.add("Andrew","123-456");
hash.add("Peter","233-999");
hash.add("Kalvin","888-999");
hash.add("Bill","121-556");
//hash.showByHash(5);

//console.log(hash.find("Bill"));

hash.traverse(function (item){
  console.log(item.key+" "+item.value);
});

console.log("Count "+hash.count());