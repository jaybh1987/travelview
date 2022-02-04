<template>

    <v-simple-table >
        <template v-slot:default>
            <thead>
                <tr>
                    <th class="text-center">Car Name</th>
                    <th class="text-center">Start Date</th>
                    <th class="text-center">End Date</th>
                    <th class="text-center">Start Time</th>
                    <th class="text-center">End Time</th>
                    <th class="text-center">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr
                v-for="i in jsonData"
                :key="i.car"
                >
                
                <td>{{i.car}}</td>
                <td>{{i.startDate}}</td>
                <td>{{i.endDate}}</td>
                <td>{{i.stTime}}</td>
                <td>{{i.edTime}}</td>
                <td>    
                    <v-icon
                    color="green"                
                    >
                        mdi-pencil-circle
                    </v-icon>
                    |
                    <v-icon
                    color="red"
                    >
                        mdi-delete-circle
                    </v-icon>
                        
                        
                </td>
                    
                </tr>
            </tbody>
        </template>
    </v-simple-table>

    
</template>


<script>


    export default {
        data: () => ({
            title: 'Welcome to view page. ' , 
            jsonData: [{
                "car":"Innova",
                "startDate":"2022-02-03",
                "endDate":"2022-02-18",
                "stTime":"01:05",
                "edTime":"02:15"
                }, 
                {
                "car":"Indigo",
                "startDate":"2022-02-03",
                "endDate":"2022-02-18",
                "stTime":"01:05",
                "edTime":"02:15"
                }, 
                {
                "car":"Maruti Dezire",
                "startDate":"2022-02-03",
                "endDate":"2022-02-18",
                "stTime":"01:05",
                "edTime":"02:15"
                }],
            
        })
    }
</script>
