<script>
    import { Router, Route, Link } from 'svelte-routing';
    // import Home from './Home.svelte';
    import munkaim from './munkaim.svelte';
  
    import {munkaimTomb} from "./KiemeltMunkaim";
    </script>
    
    <main>
    <h1>Vági Lőrinc Portfoliója</h1>
    <div class="munkaim">
        <h2 style="padding-top: 0px; margin-top: 10px;">Kiemelt munkáim</h2>
        <div class="munkaimList">
            {#each munkaimTomb as munka}
            <div class="munkak">
                <h2>{munka.title}</h2>
                <p>{munka.date}</p>
                <p>{munka.desc}</p>
                <a class="agomb" href="{munka.link}">Megnyitás</a>
            </div>
            {/each}
        </div>
        <a class="agomb" href="/munkaim">Minden órai munka mutatása</a>
    </div>
    <div class="hasznos">
        <h2>Hasznos dolgok webfejlesztéshez</h2>
    </div>
    </main>
    
    <style>
    
    </style>
  
  <Router>
    <!-- <Route path="/" component={Home} /> -->
    <Route path="/munkaim" component={munkaim} />
  </Router>
    