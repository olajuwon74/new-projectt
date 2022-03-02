//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract City{

    struct State{
        uint houses;
        uint people;
    }

    uint public index;
    mapping (uint => State) public State_info;
    event ret (State);

    function addState(State calldata _State) public{
        State storage s = State_info[1];
        s.houses = _State.houses;
        s.people = _State.people;
        emit ret(s);
    }

    function getState() public view returns(State memory s){
        
        // State storage sta = State_info[index];
        // s.houses = sta.houses;
        // s.people = sta.people;
        s = State_info[1];
    
    }

}