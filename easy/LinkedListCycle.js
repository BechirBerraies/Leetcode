
var hasCycle = function(head) {
    let slow = head;
    let fast = head;
while(fast && fast.next){

    slow = slow.next;
    fast = fast.next.next;

    if(slow == fast){
        console.log("we found a match");
        return true 
    }
};
return false   
}
head1 = [3,2,0,-4];
head2 = [2];
head3 = [1,2]
console.log(hasCycle(head1));

