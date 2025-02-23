package entity

type Asset struct {
	ID           string
	Name         string
	MarketVolume int
}

func NewAsset(id, name string, marketVoume int) *Asset {
	return &Asset{
		ID:           id,
		Name:         name,
		MarketVolume: marketVoume,
	}
}
