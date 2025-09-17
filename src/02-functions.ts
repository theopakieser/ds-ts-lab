import { Friend, Colleague, EmailContact } from './myTypes'
import { colleagues, friends } from './01-basics'

function older(f: Friend) : string {
     f.age += 1
     return `${f.name} is now ${f.age}` 
}

function allOlder(friends : Friend[]){
    return friends.map(older);

}

//console.log(older(friends[0]))
//console.log(allOlder(friends))

// Find the colleague with the highest extension number.
function highestExtension(cs: Colleague[]) { // Inferred retun type
  const result = cs.sort(
    (c1, c2) => c1.contact.extension - c2.contact.extension
  );
  return result[cs.length - 1];
}

//console.log(highestExtension(colleagues.current));

function addColleague(colleagues: Colleague[], name: string, department: string, email: string){
  const highest = highestExtension(colleagues);
  const newColleague: Colleague = {
    name, department, 
    contact: { 
      email: email, 
      extension: highest.contact.extension + 1}
  }

  colleagues.push(newColleague);
}

addColleague(colleagues.current, "Sheild O Connell", "HR", "soc@here.com");
//console.log(colleagues.current.filter((c) => c.name === "Sheild O Connell"));

function sortColleagues(
  colleagues: Colleague[],
  sorter: (c1: Colleague, c2: Colleague) => number,
  max? : number
): EmailContact[] {
  let end = colleagues.length;
  if (max !== undefined) {
     end = max < 2 ? 1 : max
  }
  const sorted = colleagues.sort(sorter);
  const fullResult =  sorted.map((ce) => ({ name: ce.name, email: ce.contact.email }));
  return fullResult.slice(0,end)
}
// Test invocations
//console.log(sortColleagues(colleagues.current, (a, b) => (a.contact.extension - b.contact.extension),3));
//console.log(sortColleagues(colleagues.current, (a, b) => (a.name.length - b.name.length),1));
//console.log(sortColleagues(colleagues.current, (a, b) => (a.name.length - b.name.length))); // NEW


function findFriends(friends : Friend[], critation : (friend : Friend) => boolean){
  return friends
    .filter(critation)
    .map(f => f.name)
}

//console.log(findFriends(friends, (friend) => friend.name.startsWith('Pa')));
//console.log(findFriends(friends, (friend) => friend.age < 35));

function addInterest(friend : Friend, interest : string){
  friend.interests = []
  friend.interests.push(interest)
  return friend.interests
}

console.log(addInterest(friends[0], 'Politics'))

