interface Pokemon {
  id: string;
  attack: number;
  defence: number;
}

interface BaseRecord {
  id: string;
}

interface Database<T extends BaseRecord> {
  set(newValue: T): void;
  get(id: string): T | undefined;
}

// Factory Pattern
function createDatabase<T extends BaseRecord>() {
  class InMemoryDatabase<T> implements Database<T> {
    private db: Record<string, T> = {};

    public set(newValue: T): void {
      this.db[newValue.id] = newValue;
    }
    get(id: string): T | undefined {
      return this.db[id];
    }
  }

  return InMemoryDatabase;
}

const PokemonDB = createDatabase<Pokemon>();
const pokemonDB = new PokemonDB();

pokemonDB.set({
  id: "pikachu",
  attack: 10,
  defence: 10,
});

console.log(pokemonDB.get("pikachu"));
