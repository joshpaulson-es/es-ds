<template>
    <div>
        <es-view-more
            :length="100"
            :content="`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in aliquam ex.
                Nullam vestibulum ex mi, ut suscipit libero condimentum id. Pellentesque eu diam vel nisi
                molestie porta eget sed odio. Quisque congue risus id metus facilisis, non imperdiet libero rutrum.
                Mauris vitae ante porttitor, consectetur purus faucibus, euismod ex. Orci varius natoque penatibus
                et magnis dis parturient montes, nascetur ridiculus mus. Nulla ullamcorper elit sed viverra finibus.
                Mauris vitae tortor mauris. Cras suscipit nibh nec nisi cursus ornare. Maecenas quis turpis sit amet
                sapien dapibus sollicitudin viverra eu justo. Vivamus posuere metus sit amet purus tempus volutpat.
                Donec eleifend elit quam. `" />
    </div>
</template>
<script>
import { EsViewMore } from '@energysage/es-vue-base';

export default {
    name: 'EsViewMoreDocs',
    components: {
        EsViewMore,
    },
};
</script>
