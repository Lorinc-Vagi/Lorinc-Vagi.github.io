<script>
    import {munkaimTomb} from "./osszMunka";
    </script>

<h1>Munkáim</h1>
<a class="agomb" href="javascript:history.back()">↩</a>



<div class="table">
    <table>
        <thead>
          <tr>
            <th style="text-decoration: underline;">Név</th>
            <th style="text-decoration: underline;">Dátum</th>
            <th style="text-decoration: underline;">Leírás</th>
            <th style="text-decoration: underline;">link</th>
          </tr>
        </thead>
        <tbody>
    
            {#each munkaimTomb as munkak}
            {#if munkak.depolyed=="true"}
            <tr>
                <td>
                    {munkak.title}
                </td>
                <td>
                    {munkak.date}
                </td>
                <td style="text-align: left;">
                    {munkak.desc}
                </td>
                <td>
                    {#if munkak.link!=""}
                    <a href="{munkak.link}">Megnyitás</a>
                        
                    {/if}
                </td>
            </tr>
            {/if}
    
            {/each}
        </tbody>
      </table>

</div>
<!-- <div class="munkaim">
    <h2 class="">Kiemelt munkáim</h2>
    <div class="munkaimList">
        {#each munkaimTomb as munka}
        {#if munka.depolyed=="true"}
        <div class="munkak">
            <h2>{munka.title}</h2>
            <p>{munka.date}</p>
            <p>{munka.desc}</p>
            <a href="{munka.link}">Megnyitás</a>
        </div>
            
        {/if}
        {/each}
    </div>
    <a href="/munkaim">Minden órai munka mutatása</a>
</div> -->


