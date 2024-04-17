<template>
    <div class="rules_wrapper">
        <h2>{{ textData[`title_${currentLanguage}`] }}</h2>
        <div class="table" v-if="textData['isTable'] === true">
            <table>
                <tr v-for="(item, index) in textData['table']">
                    <th v-if="item.type === 'headers'"
                        v-for="(element, elemIndex) in item[`headers_${currentLanguage}`]">{{ element }}
                    </th>
                    <td v-else-if="item.type === 'line'"
                        v-for="(element, elemIndex) in item[`text_${currentLanguage}`]">{{ element }}
                    </td>
                </tr>
            </table>
        </div>
        <div class="main_blocks" v-for="(item, index) in textData['main_block']" :key="index">

            <div  v-if="item.type === 'block'">
                <h3>{{ item[`title_${currentLanguage}`] }}</h3>
                <p>{{ item[`text_${currentLanguage}`] }}</p>
            </div>

            <div  v-else-if="item.type === 'list'">
                <h3>{{ item[`title_${currentLanguage}`] }}</h3>
                <ul>
                    <li class="standard_input" v-for="(line, lineIndex) in item.lines" :key="lineIndex">
                        {{ line[`text_${currentLanguage}`] }}</li>
                </ul>
            </div>

        </div>
        <div class="text_block">
            <div class="links_wrapper" v-for="(element, elementIndex) in textData['references']" :key="elementIndex">
                <h3 class="title standard_input" 
                    v-if="element.type === 'title'">{{ element['text_' + currentLanguage] }}</h3>
                <div class="links_block" v-else>
                    <a :href="element.link" target="_blank">{{ element['text_' + currentLanguage] }}</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, defineProps } from 'vue'
import { useMainStore } from "#imports";
import { computed } from "#imports";
const store = useMainStore()
const currentLanguage = computed(() => store.currentLanguage.toLowerCase());
const { textData } = defineProps(["textData"])


</script>

<style scoped lang="scss">
.rules_wrapper {
    margin: 0 15px;

    h2 {
        font-size: 2rem;
    }

    .table {
        position: relative;
        margin: 10px 0;
    }

    table {
        border: 1px solid #09c;
        border-collapse: collapse;
        table-layout: fixed;
        margin: 15px 0;
        width: 100%;

        th {
            padding: 5px;
        }

        td {
            border: 1px solid #09c;
            padding: 5px;
            min-height: 25px;
            min-width: 100px;
        }

        tr:hover {
            background-color: #D6EEEE;
        }
    }

    .main_blocks {
        padding: 0 15px;
        margin: 25px 0;

        div {

            h3 {
                font-size: 1.5rem;
            }

            p {
                margin-left: 10px;
            }

            ul {
                width: 100%;
                position: relative;
            }

            li {
                margin: 5px 0 5px 15px;
            }

            li::marker {
                color: #09c;
            }
        }
    }
    .text_block {
        padding: 0 15px;
        margin: 25px 0;
        div {
            h3 {
                font-size: 1.5rem;
            }

            a {
                margin-left: 10px;
            }
        }
    }
}
</style>