
//Trie

class TrieNode {
  constructor(){
    this.children = {}
    // children will be an object of child nodes
    this.isEndOfWOrd = false
  }
}

class Trie{
  constructor(){
    this.root = new TrieNode()
  }

  insert(word){
    let node = this.root

    for(let char of word){
      //if there is no field for char in children 
      //make a field and add a node for that char

      if(!node.children[char]){
        node.children[char] = new TrieNode()
      }

      //take the node and make it current. 
      node = node.children[char]
    }

    //after the loop is done all letters of word will have been added
    node.isEndOfWOrd = true
  }

  search(word){
    let node = this.root

    for(let char of word){
      //if that letter is not found then word is not there
      if(!node.children[char]){
        return false
      }

      //check next letter
      node = node.children[char]
    }

    return node.isEndOfWOrd //cant return true directly
  }

  print(node = this.root, word = ''){
    if(node.isEndOfWOrd){
      console.log(word)
    }

    for(let char in node.children){
      word = word + char
      this.print(node.children[char], word)
    }
  }


  startsWith(prefix){

    // we search for a prefix
    let node = this.root
    for(let char of prefix){
      if(!node.children[char]){
        return false
      }
      node = node.children[char]
    }
    return true
  }

  autocomplete(prefix){
    let node = this.root

    //this is like print but adds to an array
    let result = []

    for(let char of prefix){
      if(!node.children[char]){
        console.log('No results for autocomplete')
        return
      }
      node = node.children[char]
    }
    //loop checks for prefix first
    //now collect the words

    this.collectWords(prefix, node, result)
    console.log(result)
    return result
  }

  collectWords(prefix, node, result = []){
    if(node.isEndOfWOrd == true){
      result.push(prefix)
    }

    for(let char in node.children){
      this.collectWords(prefix + char, node.children[char], result)
    }

    return result
  }

  countWords (node = this.root){
    let count = 0
    
    if(node.isEndOfWOrd){
      count ++
    }

    for(let char in node.children){
      count += this.countWords(node.children[char])
    }

    return count
  }
}

console.log("-----Tries----")
const trie1 = new Trie();
trie1.insert("carbon");
trie1.insert("cars");
trie1.print();
console.log(trie1.search("cars"));

let tnode = new Trie();
tnode.insert("car");
tnode.insert("cat");
tnode.insert("careness");


tnode.print();
tnode.search("care");


tnode.startsWith("cat");


tnode.autocomplete("ca");


console.log("Total number of words are " + tnode.countWords());