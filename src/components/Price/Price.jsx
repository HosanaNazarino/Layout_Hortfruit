function Price ({price}) {
    return (
        <div>
            <div class="text-center">
                    <div class="row text-center">
                        <div class="col-md-4">
                            <h4 class="my-3 text-clr">{price ? price : "--"}</h4>
                        </div>                      
                    </div>    
            </div>
        </div>
    );
};
export {Price};