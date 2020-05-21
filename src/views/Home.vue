<template>
  <div class="home">
    <Col span="8">
      <Menu theme="light" accordion :active-name='activeMenus' :open-names='openMenus' @on-open-change="menuChange" @on-select="select">
        <div v-for="(item, index) in routerlist" :key="index">
          <Submenu v-if="item.children && item.children.length>0" :name="item.id">
            <template slot="title">
              <Icon  :type="item.icon"/>
              <span  >{{item.name}}</span>
            </template>
            <div v-for="(subItem, i) in item.children" :key="i">
              <Submenu v-if="subItem.children.length>0" :name="item.id + '-' + subItem.id">
                <template slot="title">
                  <Icon  :type="subItem.icon"/>
                  <span>{{subItem.name}}</span>
                </template>
                <MenuItem class="menu-level-3" v-for="(threeItem, k) in subItem.children" :name="item.id + '-' + subItem.id + '-' + threeItem.id" :key="k">
                  <Icon :type="threeItem.icon"/>
                  <span>{{threeItem.name}}</span>
                </MenuItem>
              </Submenu>
              <MenuItem v-else   :name="item.id + '-' + subItem.id">
                <Icon  :type="subItem.icon"/>
                <span>{{subItem.name}}</span>
              </MenuItem>
            </div>
          </Submenu>
          <MenuItem v-else :name="item.id">
            <Icon  :type="item.icon" />
            <span>{{item.name}}</span>
          </MenuItem>
        </div>
      </Menu>
    </Col>
  </div>
</template>

<script>
// @ is an alias to /src
/* import HelloWorld from '@/components/HelloWorld.vue' */

export default {
  name: 'Home',
  /* components: {
    HelloWorld
  }, */
  data() {
    return {
      routerlist:'',
      openMenus:[],
      activeMenus:"",
    }
  },
  mounted() {
    this.getroutelist()
  },
  methods: {
    getroutelist(){
      this.routerlist='getrouterlist'
      this.$axios({
        methods:'get',
        url:'/route.json',
      }).then(res=>{
        console.log(res.data);
        this.routerlist=res.data
        this.routerlist.map(item=>{
          let length=item.id
          console.log(length);
          
        })
        console.log(this.routerlist[2].children.length);
        
      })
    },
    menuChange(val){
      this.openMenus=val
      console.log(this.openMenus);
    },
    select(val){
      console.log(val);
      this.activeMenus=val
      console.log(this.activeMenus);
      
    },
  },
}
</script>
