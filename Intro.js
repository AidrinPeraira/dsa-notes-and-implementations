/**
 * 
An algorithim is a set of instructions to get something done
   - it will have a well defined input and output.
   - it will be clear and unambiguous
   - it will be language independant

How to analyse algorithms?

Just measuring the total time is not efficient as there are too many factors at play
So we just measure based on input size.
we count the number of steps and amount of memory used 

Basically what we do is write an algebric notaion and compare the highest orders


Order of Complexity
    1 < log n < n < n log n < n^2 < n^3 < 2^n < n!

     

*/

/**
 
Bult in Data structures 

Array
    An array is data structure to hold a collection of values. 

    Common array methods.
    - arr.push(x) -> O(1) 
    - arr.pop() -> O(1)
    - for of loop to loop through array
    - arr.unshift(x) -> O(n) since we have to re arrange all other elements
    - arr.shift() -> O(n)
    - map, filter, reduce, forEach, -> O(n)
    - concaat, slice, splice -> O(n)

Object
    An unordered collection of key value pairs

    Common object methods
    - getting values with dot and bracket notation -> O(1)
    - add new fields -> O(1)
    - delteing fields -> O(1)
        delete obj.key
    - adding funcions
    - for in loop -> O(n)
    - keys, values, entries methods -> O(n)

Set
 - It is a collection of unique values
 - can hold different datatypes
 - dynamicaly sized
 - doesn't hold insertion order
 - iterable
 - Set vs Array
    - no dplicates
    - no insertion order
    - search and delte is faster
 - Common Methods
    - const set = new Set() -> to create a set
    - set.add(value) -> to add to set
    - for (let item of set) {} -> to iterate through set
    - set.has(value) -> to check for value
    - set.delete(value) -> remove value from set
    - set.size() -> get number of items in set
    - set.clear() -> remove all items

Map
    - An unordered collection of key value pairs 
    - key can be any data type
    - are iterables using for of loop
    - Objects vs Maps
        -  Maps are orderd
        - Maps can have any key
        - Objects have some keys inherited from prototype by dfault. may cause clash. Map doesn't
        - Object are enumberable not iterable Maps are vice verca
        - Map Has built in size.
        -  Objects can have functionality. Map just stores objects


        ????? Iterable means value based acess. Enumerable means property based access

    - Common Map methods
        - const map = new Map([['a', 1], ['b', 2]]) -> to create a map
        - for (const [key, value] of map){} -> to iterated over map
        - map.set('key', value) -> to add data to map
        - map.has(key) -> check for if key exists
        - map.delte(key) -> delete the data
        - map.size() -> number of pairs in map
        - map.clear() -> remove all data
        - map.get(key) -> get particular value 
  */

/**
 
Abstract Data Type Data structures -> ie, the data structure is defined by behavior not the built in data type used to make the structure

Stack 
    - Browser History, UNdo operation, Call Stack etc are some uses
    - Last in First Out

Queue 
    - First in First Out
    - it is essentialy a list with this behaviour
    - Two main methods that are implemented are
        - Enqueue -> add element at the end / tail
        - Dequeue -> remove element at front / head

    - task scheduling in CPU, callback queue, Printer with lots of pending tasks

Linked List
    - a series of connected nodes
    - each node has value and pointer to next object.
    - Not very efficient to get a random element

    - Common Operations
        - Inertion, Deletion, Search 


Hash Table
    - aka hash map 
    - used to store key value pairs (this is how Map and Objects are implemented)
    - can give fast lookup

    - we store the key value pairs in a array
    - we hash the key into a number 
    - then we store at that index
    - this is done in reverse to get the data

    - Main operations
        - set
        - get
        - remove

    - Applicatinos
        - anywhere we need O(1) insertion and lookup
        - Databse indexing
        - caches

 */

/**
  
The customer was complaining about delayed delivery about an order. The service agent said that the error was due to an error in the supply chain. The agent gave the option for a quickened delivery without further delay within 24 hours. Or 
 
 */
