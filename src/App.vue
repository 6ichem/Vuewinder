<template>
  <div id="app" class="flex container h-screen w-full">
    <!-- side tab -->
    <div class="lg:w-1/5 border-r border-lighter mt-1 flex flex-col justify-between">
      <div>
      <button class="flex items-center text-3xl text-blue hover:bg-lightblue rounded-full mr-auto h-12 w-12 py-2 px-4 mb-3">
        <font-awesome-icon :icon="['fab', 'twitter']" />
      </button>
      <div>
        <button @click="id = item.id" v-for="item in sideitems" v-bind:key="item" :class="`
        ${ id === item.id ? 'text-blue' : ''}
        flex items-center focus:outline-none py-2 px-4 hover:bg-gray-800 rounded-full mr-auto mb-4 text-white hover:text-blue`">
          <font-awesome-icon :icon="[item.dir, item.name]" class="text-2xl lg:mr-4"/>
          <span class="text-lg font-semibold hidden lg:block">{{ item.title }}</span>
        </button>
      </div>
      <button class="lg:relative text-white bg-blue rounded-full font-semibold focus:outline-none w-12 h-12 ml-1 lg:ml-0 lg:w-56 p-3 hover:bg-darkblue">
        <span class="hidden lg:block">Tweet</span>
          <font-awesome-icon :icon="['fas', 'edit']" class="lg:hidden"/>
        </button>
      </div>
      <div class="mb-4 lg:w-full relative">
        <button class="flex items-center hover:bg-gray-800 rounded-full p-2 lg:w-60 focus:outline-none">
          <img src="me.png" class="w-10 h-10 rounded-full">
          <div class="ml-4 hidden lg:block">
            <span class="text-sm font-bold hidden lg:inline-block text-white">Hichem</span> <br>
            <span class="text-sm hidden lg:inline-block text-white">@6ichem</span>
          </div>
        </button>  
      </div>
    </div>

    <!-- main inner section -->
    <!-- tweets -->
    <div class="lg:w-1/2 lg:h-full w-full">
      <div class="px-5 py-3 border-b border-lighter flex items-center justify-between">
        <h1 class="text-xl font-bold text-white">Home</h1>
      </div>
      <div class="px-5 py-3 border-b-8 border-lighter flex">
        <div>
          <img src="me.png" class="lg:w-12 lg:h-12 hidden rounded-full">
        </div>
        <form class="w-full px-4 relative" v-on:submit.prevent="addtweet">
          <textarea v-model="mytweet.content" placeholder="What's happening?" class="w-full text-white focus:outline-none mt-3 pb-3 tweetarea bg-bgcolor" />
          <div class="flex items-center">
            <font-awesome-icon :icon="['fas', 'image']" class="text-2xl text-blue mr-6" />
            <font-awesome-icon :icon="['fas', 'film']" class="text-2xl text-blue mr-6" />
            <font-awesome-icon :icon="['fas', 'chart-bar']" class="text-2xl text-blue mr-6" />
            <font-awesome-icon :icon="['fas', 'smile']" class="text-2xl text-blue mr-6" />
            <font-awesome-icon :icon="['fas', 'clock']" class="text-2xl text-blue mr-6" />
          </div>
          <button type="submit" class="absolute bottom-0 right-0 h-10 px-4 text-white font-semibold bg-blue hover:bg-darkblue focus:outline-none rounded-full">
            Tweet
          </button>
        </form>
      </div>

      <div v-for="tweet in mytweets" v-bind:key="tweet" class="w-full p-4 border border-lighter hover:bg-lighter flex">
        <div class="flex mr-4">
          <img src="me.png" class="h-12 w-12 rounded-full flex-none">
        </div>
        <div class="w-full">
          <div class="flex items-center w-full text-white">
            <span class="font-semibold">Hichem</span>
            <span class="text-sm text-dark ml-2">@6ichem</span>
            <span class="text-sm text-dark ml-2">1sec</span>
          </div>
          <span class="py-2 text-white">
            {{ tweet.content }}
          </span>
          <div class="flex items-center justify-between w-full">
            <span class="flex items-center text-sm text-dark mt-3">
              <font-awesome-icon :icon="['fas', 'comment']" class="mr-3" />
              0
            </span>
            <span class="flex items-center text-sm text-dark mt-3">
              <font-awesome-icon :icon="['fas', 'retweet']" class="mr-3" />
              0
            </span>
            <span class="flex items-center text-sm text-dark mt-3">
              <font-awesome-icon :icon="['fas', 'heart']" class="mr-3" />
              0
            </span>
            <span class="flex items-center text-sm text-dark mt-3">
              <font-awesome-icon :icon="['fas', 'external-link-alt']" class="mr-3" />
            </span>
          </div>
        </div>
      </div>

      <div v-for="tweet in tweets" v-bind:key="tweet" class="w-full p-4 border border-lighter hover:bg-lighter flex">
        <div class="flex mr-4">
          <img :src="`${tweet.src}`" class="h-12 w-12 rounded-full flex-none">
        </div>
        <div class="w-full">
          <div class="flex items-center w-full text-white">
            <span class="font-semibold">{{ tweet.name }}</span>
            <span class="text-sm text-dark ml-2">{{ tweet.username }}</span>
            <span class="text-sm text-dark ml-2">{{ tweet.time }}</span>
          </div>
          <span class="py-2 text-white">
            {{ tweet.tweet }}
          </span>
          <div class="flex items-center justify-between w-full">
            <span class="flex items-center text-sm text-dark mt-3">
              <font-awesome-icon :icon="['fas', 'comment']" class="mr-3" />
              {{ tweet.comments }}
            </span>
            <span class="flex items-center text-sm text-dark mt-3">
              <font-awesome-icon :icon="['fas', 'retweet']" class="mr-3" />
              {{ tweet.retweets }}
            </span>
            <span class="flex items-center text-sm text-dark mt-3">
              <font-awesome-icon :icon="['fas', 'heart']" class="mr-3" />
              {{ tweet.likes }}
            </span>
            <span class="flex items-center text-sm text-dark mt-3">
              <font-awesome-icon :icon="['fas', 'external-link-alt']" class="mr-3" />
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- trends and side stuff -->
    <div class="lg:block hidden w-1/3 h-full border-l border-bgcolor py-2 px-2 relative">
      <font-awesome-icon :icon="['fas', 'search']" class="absolute left-5 top-0 mt-5 text-lg text-light ml-6" />
      <input class="rounded-full w-full p-3 bg-lighter pl-10 text-sm focus:outline-none ml-6 text-white" placeholder="Search Twitter">
      <div class="w-full bg-bgcolor mt-3 ml-6">
        <div class="p-3 bg-greycolor rounded-lg">
          <h1 class="text-lg font-bold ml-3 mb-2 text-white">What's happening</h1>
          <button v-for="trend in trends" v-bind:key="trend" class="w-full flex justfiy-between hover:bg-lighter p-3 border-t border-lighter focus:outline-none text-white">
            <div>
              <p class="text-sm text-left leading-tight text-dark">{{ trend.top }}</p>
              <p class="font-bold text-left leading-tight">{{ trend.title }}</p>
              <p class="text-left leading-tight text-dark">{{ trend.bottom }}</p>
            </div>
          </button>
          <button class="p-3 w-full hover:bg-lighter text-left text-blue b-top border-lighter focus:outline-none">
            Show More
          </button>
        </div>
      </div>
      <!-- who to follow -->
      <div class="w-full rounded-lg bg-greycolor mt-3 ml-6">
        <div class="p-3">
          <h1 class="text-lg font-bold ml-3 mb-2 text-white">Who to follow</h1>
          <button class="w-full flex justfiy-between hover:bg-lighter p-3 border-t border-lighter focus:outline-none text-white" v-bind:key="person" v-for="person in people">
              <img :src="`${person.src}`" class="w-12 h-12 rounded-full">
              <div class="ml-4 hidden lg:block">
                <span class="text-sm font-bold hidden lg:inline-block">{{ person.name }}</span> <br>
                <span class="text-sm hidden lg:inline-block">{{ person.username }}</span>
            </div>
          <button class="ml-auto text-sm text-blue py-2 px-4 rounded-full font-bold border-2 border-blue hover:bg-lightest focus:outline-none">
            Follow
          </button>
          </button>
          <button class="p-3 w-full hover:bg-lighter text-left text-blue b-top border-lighter   focus:outline-none">
            Show More
          </button>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      sideitems: [
        {dir: 'fas', name: 'home', title: 'Home', id:'home'},
        {dir: 'fas', name: 'hashtag', title: 'Explore', id: 'explore'},
        {dir: 'fas', name: 'bell', title: 'Notifications', id: 'notifications'},
        {dir: 'fas', name: 'envelope', title: 'Messages', id: 'messages'},
        {dir: 'fas', name: 'bookmark', title: 'Bookmarks', id: 'bookmarks'},
        {dir: 'fas', name: 'clipboard-list', title: 'Lists', id: 'lists'},
        {dir: 'fas', name: 'user', title: 'Profile', id: 'profile'},
        {dir: 'fas', name: 'ellipsis-h', title: 'More', id: 'more'}
      ],
      id: 'home',
      trends: [
        {top: 'Technology', title: '#CancelNetflix', bottom: 'Trending with: #BOYCOTTNETFLIX'},
        {top: 'Entertainment', title: 'The Avengers', bottom: '26.5K Tweets'},
        {top: 'Rock', title: 'E Street Band', bottom: '4,327 tweets'},
        {top: 'Television', title: 'The 100 airing on The CW', bottom: '191 tweets'},
        {top: 'Music', title: 'When Beyonce', bottom: '25.4K Tweets'},
      ],
      people: [
        {src: 'Kavinsky.jpg', name: 'Kavinsky', username: '@iamKAVINSKY'},
        {src: 'trevor.jpg', name: 'Trevor Something', username: '@trevorsomething'},
        {src: 'evan.jpg', name: 'Evan You', username: '@youyuxi'}
      ],
      tweets: [
        {src: 'Kavinsky.jpg', name: 'Kavinsky', username: '@iamKAVINSKY', time: '20min', tweet: 'NEW ALBUM COMING SOONSparkles', comments: '1,000', retweets: '550', likes: '1,000,003'},
        {src: 'me.png', name: 'Hichem', username: '@6ichem', time: '55min', tweet: 'welcome to my twitter clone!', comments: '2,030', retweets: '50', likes: '20,003'},
        {src: 'trevor.jpg', name: 'Trevor Something', username: '@trevorsomething', time: '1hr', tweet: 'I started working on tracks for room about a year ago in my old living room 🖥️👀 14 of the 16 tracks were made on this machine 🤖', comments: '100,000', retweets: '1,000,002', likes: '5,000,003'},
        {src: 'evan.jpg', name: 'Evan You', username: '@youyuxi', time: '2hr', tweet: 'Norman Powell clutch tonight', comments: '100,500', retweets: '1,000,032', likes: '5,000,103'}
      ],
      mytweets: [
        {content: 'my tweet!'}
      ],
      mytweet: [
        {content: ''}
      ]
    }
  },
  methods: {
    addtweet() {
      let newtweet = {
        content: this.mytweet.content
      };
      this.mytweets.unshift(newtweet);
    }
  },
}
</script>

<style>
body {
  background-color: #141d26;

}
</style>
