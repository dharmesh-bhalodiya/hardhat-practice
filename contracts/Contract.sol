//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

// contract Contract {
//     event Winner(address);

//     function attempt() external {
//         require(msg.sender != tx.origin, "msg.sender is equal to tx.origin");
//         emit Winner(msg.sender);
//     }
// }

// contract Caller {
//     Contract _contract;

//     constructor(Contract cnt){
//         _contract = Contract(cnt);
//     }

//     function callFun() external {
//         _contract.attempt();
//     }
// }



contract Caller {

  Contract public t;

  // where test is deployed and the address is known
  // Pass in the address for test {}.

  constructor(address tAddress) {
    t = Contract(tAddress); // address of contract t
  }

  function callIt() public
  {
      return t.attempt();
  }
}

// This interface constant includes the function interfaces (exactly as in the "real" contract" with the fynctions undefined
// This tells the compiler how to communicate with the ABI in test{}.

contract Contract { 
  function attempt() external {}
}