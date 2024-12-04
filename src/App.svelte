<script>
  import { Router, Route, Link } from 'svelte-routing';
  import Home from './lib/home.svelte';
  import munkaim from './lib/munkaim.svelte';

  import {munkaimTomb} from "./lib/KiemeltMunkaim";
  </script>
  

<Router>
  <Route path="/" component={Home} />
  <Route path="/munkaim" component={munkaim} />
</Router>
  