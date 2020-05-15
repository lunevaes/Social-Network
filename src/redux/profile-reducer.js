let initialState = {
  profileInfo: {
    name: "Софи",
    age: "23",
    friends: "13",
    avatar: ""
  }
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    default: {
      return state
    }
  }
}

export default profileReducer
