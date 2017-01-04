var app = new Vue({
    el: '#app',
    data: {
        starting: 50,
        message: 'Ahoy!',
    },
    computed: {
        computedTotals: function () {
            var weeks = new Array();
            weeks[0] = [];
            weeks[0]['deposit'] = this.starting;
            weeks[0]['total'] = this.starting;
            weeks[0]['weekNumber'] = 1;
            for (i = 1; i < 52; i++) {
                if (i === 1) {
                    var previousIndex = 0;
                }
                else {
                    var previousIndex = i - 1;
                }
                weeks[i] = [];
                weeks[i]['weekNumber'] = i + 1;
                weeks[i]['deposit'] = this.starting + weeks[previousIndex]['deposit'];
                weeks[i]['total'] = this.starting + weeks[previousIndex]['total'] + weeks[previousIndex]['deposit'];
            }
            return weeks;
        },
        totalSaved: function () {
            var lastMonth = this.computedTotals.slice(-1).pop();
            return lastMonth['total'].toLocaleString();
        }
    },
    mounted: function () {
        console.log('nothing to see here, move along, nerd');
    }
})
